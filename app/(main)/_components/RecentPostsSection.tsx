import { PostData } from "@/app/utils/posts";

import { PostCard } from "@/app/(main)/_components/PostCard";

interface RecentPostsSectionProps {
  posts: PostData[];
}

export const RecentPostsSection = ({ posts }: RecentPostsSectionProps) => {
  return (
    <section aria-labelledby="recent-posts-heading" className="mt-4">
      <header className="flex items-center justify-between pb-2 border-b border-slate-200 mb-6">
        <h2 id="recent-posts-heading" className="text-gray-main text-2xl font-bold tracking-tight">
          최근 게시글
        </h2>
      </header>
      <ul className="flex flex-col gap-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
};
