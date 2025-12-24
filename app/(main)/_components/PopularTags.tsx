import Link from "next/link";

import { PostData } from "@/app/utils/posts";

interface Props {
  posts: PostData[];
}

export const PopularTags = ({ posts }: Props) => {
  const sortedTags = Object.entries(
    posts
      .flatMap((p) => p.tag)
      .reduce<Record<string, number>>((acc, t) => ((acc[t] = (acc[t] || 0) + 1), acc), {}),
  )
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10);

  return (
    <nav aria-labelledby="popular-tags-heading" className="flex flex-col gap-4">
      <h3 id="popular-tags-heading" className="font-bold text-gray-main text-lg">
        인기 태그
      </h3>
      <ul className="flex flex-wrap gap-2">
        {sortedTags.map(([tag, count]) => (
          <li key={tag}>
            <Link
              href={`/posts?tag=${tag}`}
              className="inline-block text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-colors"
            >
              {tag} <span className="text-slate-400 ml-1">{count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
