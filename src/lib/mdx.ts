import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { visit } from "unist-util-visit";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { toString as hastToString } from "hast-util-to-string";
import { toString as mdastToString } from "mdast-util-to-string";
import { Root as MdastRoot, Heading as MdastHeading } from "mdast";
import {
  Root as HastRoot,
  Element as HastElement,
  Text as HastText,
} from "hast";

interface Frontmatter {
  title: string;
  date: string;
  description?: string;
  writer: string;
  tags: string[];
  thumbnail?: string;
  slug: string;
  [key: string]: unknown;
}

export interface TOCHeading {
  level: number;
  text: string;
  id: string;
}

interface Post extends Frontmatter {
  slug: string;
}

interface MDXPost {
  content: React.ReactElement;
  frontmatter: Frontmatter;
  headings: TOCHeading[];
}

const rootDirectory = path.join(process.cwd(), "content");

function isHastElement(node: HastElement | HastText): node is HastElement {
  return (node as HastElement).type === "element";
}

export async function getPost(slug: string): Promise<MDXPost> {
  const filePath = path.join(rootDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const headings: TOCHeading[] = [];
  const { content, data } = matter(fileContent);

  const { content: compiled } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [
          () => (tree: MdastRoot) => {
            visit(tree, "heading", (node: MdastHeading) => {
              const text = mdastToString(node);
              headings.push({
                level: node.depth,
                text,
                id: "",
              });
            });
          },
        ],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "append",
              properties: {
                className: ["anchor-link"],
                ariaLabel: "anchor",
              },
            },
          ],
          [
            rehypePrettyCode,
            {
              theme: "github-dark",
              keepBackground: true,
            },
          ],
          () => (tree: HastRoot) => {
            const headingNodes: Array<{
              text: string;
              id: string;
              level: number;
            }> = [];

            visit(tree, "element", (node: HastElement | HastText) => {
              if (isHastElement(node) && /^h[1-6]$/.test(node.tagName)) {
                const text = hastToString(node);
                const id = node.properties?.id as string;

                if (id) {
                  headingNodes.push({
                    level: parseInt(node.tagName.slice(1), 10),
                    text,
                    id,
                  });
                }
              }
            });
            headingNodes.forEach((heading, index) => {
              if (headings[index]) {
                headings[index].id = heading.id;
              }
            });
          },
        ],
      },
    },
  });

  return {
    content: compiled,
    frontmatter: data as Frontmatter,
    headings,
  };
}

function validateThumbnailPath(thumbnail?: string): string | undefined {
  if (!thumbnail) return undefined;

  const defaultThumbnail = "/test.webp";

  try {
    if (!thumbnail) return defaultThumbnail;
    return thumbnail;
  } catch (e) {
    console.error(e);
    return defaultThumbnail;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const files = fs.readdirSync(rootDirectory);

  const posts = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(".mdx", "");
      const filePath = path.join(rootDirectory, filename);
      const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
      const { data } = matter(fileContent);

      const post: Post = {
        slug,
        title: data.title,
        writer: data.writer,
        date: data.date,
        description: data.description,
        tags: data.tags,
        thumbnail: validateThumbnailPath(data.thumbnail),
      };

      return post;
    })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
