import { getPost, getAllPosts } from "@/lib/mdx";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = await getPost(slug);

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const { content, frontmatter } = await getPost(slug);

  return (
    <article className="min-h-screen max-w-4xl mx-auto py-8">
      <h1 className="mt-16 text-4xl font-bold">{frontmatter.title}</h1>
      <time className="text-gray-600">{frontmatter.date}</time>
      <div className="mt-8 prose prose-lg">{content}</div>
    </article>
  );
}
