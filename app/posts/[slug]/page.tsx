import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { notFound } from "next/navigation";

import { List } from "lucide-react";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

import { Pre } from "@/app/components/mdx/Pre";
import { Tag } from "@/app/components/ui";

import { getAllPosts, getPostBySlug } from "@/app/utils/posts";

import { PostNavigation } from "@/app/posts/[slug]/_components/PostNavigation";
import { TableOfContents } from "@/app/posts/[slug]/_components/TableOfContents";
import { getHeadings } from "@/app/posts/[slug]/_util/getHeading";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: post.thumbnail ? [post.thumbnail] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.thumbnail ? [post.thumbnail] : [],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const posts = getAllPosts();
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const newerPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const olderPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  const headings = getHeadings(post.content);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-28 space-y-4">
            <div className="flex items-center gap-2 text-slate-400 uppercase text-[11px] font-bold tracking-[0.2em] px-1">
              <List size={14} />
              Table of Contents
            </div>
            <TableOfContents headings={headings} />
          </div>
        </aside>

        <article className="lg:col-span-9 max-w-3xl">
          <header className="mb-10 space-y-6">
            <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-gray-main">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="font-semibold text-slate-900">KimGho</span>
              <span className="text-slate-300" aria-hidden="true">
                |
              </span>
              <time dateTime={post.date}>{post.date}</time>
            </div>

            <div className="flex flex-wrap gap-2" aria-label="Tags">
              {post.tag.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </header>

          {post.thumbnail && (
            <figure className="mb-12 rounded-2xl overflow-hidden border border-slate-200 relative aspect-video shadow-sm">
              <Image src={post.thumbnail} alt={post.title} fill className="object-cover" priority />
            </figure>
          )}

          <section className="prose prose-slate max-w-none font-body prose-headings:font-display prose-headings:tracking-tight prose-headings:scroll-mt-28 prose-a:text-blue-600 prose-code:text-blue-600 prose-code:bg-blue-600/10 prose-code:px-1 prose-code:rounded prose-pre:bg-gray-main prose-pre:border prose-pre:border-slate-700">
            <MDXRemote
              source={post.content}
              components={{
                pre: Pre,
              }}
              options={{
                mdxOptions: {
                  rehypePlugins: [
                    rehypeSlug,
                    [
                      rehypePrettyCode,
                      {
                        theme: "github-dark",
                        keepBackground: false,
                      },
                    ],
                  ],
                },
              }}
            />
          </section>

          <hr className="my-12 border-slate-200" />

          <PostNavigation olderPost={olderPost} newerPost={newerPost} />
        </article>
      </div>
    </div>
  );
}
