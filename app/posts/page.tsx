import { Suspense } from "react";

import { Metadata } from "next";

import { getAllPosts } from "@/app/utils/posts";

import { PostList } from "@/app/posts/_components";

export const metadata: Metadata = {
  title: "공부한 흔적을 정리하는 곳",
  description: "공부한 흔적을 정리하는 곳",
  keywords: ["공부", "개발", "프로그래밍", "코드"],
  openGraph: {
    title: "공부한 흔적을 정리하는 곳",
    description: "공부한 흔적을 정리하는 곳",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "공부한 흔적을 정리하는 곳",
    description: "공부한 흔적을 정리하는 곳",
    images: ["/og-image.png"],
  },
};

export default function PostsPage() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.flatMap((post) => post.tag)));

  return (
    <div className="layout-content-container flex flex-col max-w-300 w-full gap-8 py-10 px-4">
      <div className="flex flex-col gap-2 py-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-main">Post</h1>
        <p className="text-slate-500 text-lg max-w-2xl">
          공부,회고,일상 등 다양한 주제가 있습니다.
        </p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <PostList posts={posts} categories={categories} />
      </Suspense>
    </div>
  );
}
