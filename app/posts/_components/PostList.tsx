"use client";

import { useState, useMemo } from "react";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { GAPostEvents } from "@/app/utils/analytics";
import { PostData } from "@/app/utils/posts";

import { PostCard } from "@/app/(main)/_components/PostCard";
import { PostFilter, LatestPost } from "@/app/posts/_components";

interface Props {
  posts: PostData[];
  categories: string[];
}

export const PostList = ({ posts, categories }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("tag") || "All";

  const [search, setSearch] = useState("");

  const handleCategoryChange = (tag: string) => {
    GAPostEvents.selectCategory(tag);
    const params = new URLSearchParams(searchParams.toString());
    if (tag === "All") {
      params.delete("tag");
    } else {
      params.set("tag", tag);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === "All" || post.tag.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [posts, search, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: posts.length };
    posts.forEach((post) => {
      post.tag.forEach((tag) => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });
    return counts;
  }, [posts]);

  const [featuredPost, ...remainingPosts] = filteredPosts;

  return (
    <div className="flex flex-col md:flex-row gap-12 items-start w-full">
      <PostFilter
        search={search}
        onSearchChange={setSearch}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        categories={categories}
        categoryCounts={categoryCounts}
      />

      <div className="flex-1 min-w-0 w-full">
        {filteredPosts.length === 0 ? (
          <div
            role="status"
            aria-live="polite"
            className="text-center py-24 bg-white rounded-2xl border border-dashed border-slate-300 text-slate-500 font-medium"
          >
            검색 결과가 없습니다.
          </div>
        ) : (
          <section className="flex flex-col gap-10" aria-label="게시글 목록">
            <LatestPost post={featuredPost} />

            <div className="grid grid-cols-1 gap-6">
              {remainingPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
