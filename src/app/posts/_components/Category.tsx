"use client";

import { CategoryProps } from "@/app/posts/types/type";

export default function Category({
  categories,
  selectedTag,
  setSelectedTagAction,
}: CategoryProps) {
  return (
    <div className="mb-12 hidden md:flex md:flex-col md:text-xl">
      <h2 className="text-2xl font-bold mb-4">태그</h2>
      <div className="flex flex-wrap gap-3">
        {Object.entries(categories).map(([tag, posts]) => (
          <button
            key={tag}
            onClick={() => setSelectedTagAction(tag)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedTag === tag
                ? "bg-gray-400 text-black dark:bg-blue-gray-100 dark:text-black"
                : "bg-gray-200 text-gray-800  dark:text-black"
            } dark:active:bg-gray-400`}
          >
            {tag} ({posts.length})
          </button>
        ))}
      </div>
    </div>
  );
}
