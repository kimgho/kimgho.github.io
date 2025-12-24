import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostData {
  slug: string;
  title: string;
  date: string;
  description: string;
  tag: string[];
  content: string;
  thumbnail?: string;
}

export function getAllPosts(): PostData[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const rawTags = data.tag;
      const tags = Array.isArray(rawTags) ? rawTags : rawTags ? [rawTags] : [];

      return {
        slug,
        content,
        title: data.title || slug,
        date: data.date || "",
        description: data.description || "",
        tag: tags,
        thumbnail: data.thumbnail || undefined,
      } as PostData;
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): PostData | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const rawTags = data.tag;
    const tags = Array.isArray(rawTags) ? rawTags : rawTags ? [rawTags] : [];

    return {
      slug,
      content,
      title: data.title || slug,
      date: data.date || "",
      description: data.description || "",
      tag: tags,
      thumbnail: data.thumbnail || undefined,
    };
  } catch {
    return null;
  }
}
