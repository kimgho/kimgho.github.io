"use client";

import TagBadge from "@/app/_components/common/TagBadge";
import Category from "@/app/posts/_components/Category";
import MobileCategory from "@/app/posts/_components/MobileCategory";
import { Post } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RenderPost({ posts }: { posts: Post[] }) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const categories: { [key: string]: Post[] } = {
    전체: posts,
  };

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (!categories[tag]) {
        categories[tag] = [];
      }
      categories[tag].push(post);
    });
  });

  const filteredPosts =
    selectedTag === "전체" || !selectedTag
      ? posts
      : posts.filter((post) => post.tags.includes(selectedTag));

  return (
    <div className="min-h-screen max-w-5xl mx-auto px-4 py-8 mt-16">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold mb-4">블로그 포스트</h1>
        <p className="text-gray-600">개발 이야기와 일상을 기록합니다</p>
      </div>

      <Category
        categories={categories}
        selectedTag={selectedTag}
        setSelectedTagAction={setSelectedTag}
      />
      <div className="md:hidden mb-4">
        <MobileCategory
          categories={categories}
          selectedTag={selectedTag}
          setSelectedTagAction={setSelectedTag}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.thumbnail || "/test.avif"}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={true}
                  quality={85}
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="/test.avif"
                  onError={() => {
                    console.error("Image load failed");
                  }}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="p-4 bg-gray-200 dark:bg-gray-500 dark:text-black">
                <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                <p className=" text-sm mb-4">{post.description}</p>

                <div className="flex flex-col items-start justify-between">
                  <span className="text-sm ">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.tags.map((tag) => (
                      <TagBadge key={tag} tag={tag} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
