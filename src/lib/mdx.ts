import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

interface Frontmatter {
  title: string;
  date: string;
  description?: string;
  writer: string;
  tags?: string[];
  thumbnail?: string;
  slug: string;
  [key: string]: unknown;
}

interface Post extends Frontmatter {
  slug: string;
}

interface MDXPost {
  content: React.ReactElement;
  frontmatter: Frontmatter;
}

const rootDirectory = path.join(process.cwd(), "content");

export async function getPost(slug: string): Promise<MDXPost> {
  const filePath = path.join(rootDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { content, data } = matter(fileContent);

  const { content: compiled } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "github-dark",
              keepBackground: true,
            },
          ],
        ],
      },
    },
  });

  return {
    content: compiled,
    frontmatter: data as Frontmatter,
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
        tags: Array.isArray(data.tags) ? data.tags : undefined,
        thumbnail: validateThumbnailPath(data.thumbnail),
      };

      return post;
    })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
