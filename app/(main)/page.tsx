import { Suspense } from "react";

import { Metadata } from "next";

import { getAllPosts } from "@/app/utils/posts";

import { PostList } from "@/app/posts/_components";

export const metadata: Metadata = {
  title: "홈",
  description: "김건호의 기술 블로그 홈입니다.",
  openGraph: {
    title: "김건호 블로그",
    description: "김건호의 기술 블로그 홈입니다.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "김건호 블로그",
    description: "김건호의 기술 블로그 홈입니다.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  const allPosts = getAllPosts();
  const categories = Array.from(new Set(allPosts.flatMap((post) => post.tag)));

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-10 md:py-14">
      <header className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black tracking-tight text-gray-main md:text-4xl">Posts</h1>
        <p className="mt-2 text-sm text-gray-sub">공부한 흔적을 정리하는 곳</p>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <PostList posts={allPosts} categories={categories} />
      </Suspense>
    </main>
  );
}
