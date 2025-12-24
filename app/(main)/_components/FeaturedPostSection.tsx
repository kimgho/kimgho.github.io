import Link from "next/link";

import { PostData } from "@/app/utils/posts";

import { RecentPost } from "@/app/(main)/_components/RecentPost";

interface FeaturedPostSectionProps {
  post: PostData;
}

export const FeaturedPostSection = ({ post }: FeaturedPostSectionProps) => {
  return (
    <section aria-labelledby="featured-post-heading">
      <header className="flex items-center justify-between pb-2 border-b border-slate-200 mb-6">
        <h2 id="featured-post-heading" className="text-gray-main text-2xl font-bold tracking-tight">
          최신 글
        </h2>
        <Link href="/posts" className="text-gray-sub text-sm font-bold hover:underline">
          전체보기
        </Link>
      </header>
      <RecentPost post={post} />
    </section>
  );
};
