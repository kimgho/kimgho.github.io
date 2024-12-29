import TagBadge from "@/app/_components/common/TagBadge";
import { getPost, getAllPosts } from "@/lib/mdx";
import { Metadata } from "next";
import TableOfContents from "@/app/_components/TableOfContents";
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
  const { content, frontmatter, headings } = await getPost(slug);

  return (
    <div className="relative">
      <article className="min-h-screen max-w-4xl mx-auto py-8 px-4">
        <header className="mb-12">
          <h1 className="mt-16 text-5xl font-bold mb-4">{frontmatter.title}</h1>
          <div className="text-gray-600">
            <div className="flex items-center gap-4">
              <time className="text-sm">{frontmatter.date}</time>
              <span className="text-sm">·</span>
              <h3 className="text-sm">{frontmatter.writer}</h3>
            </div>
            <div className="flex flex-row flex-wrap gap-2 mt-2">
              {frontmatter.tags?.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          </div>
        </header>
        <div className="mt-8">
          <div className="markdown space-y-6">{content}</div>
        </div>
      </article>
      <TableOfContents headings={headings} />
    </div>
  );
}
