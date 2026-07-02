import { Tag } from "@/app/components/ui/Tag";

import { PostSearch } from "./PostSearch";

interface PostFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
  categoryCounts: Record<string, number>;
}

export const PostFilter = ({
  search,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  categoryCounts,
}: PostFilterProps) => {
  const sortedCategories = categories.sort((a, b) => categoryCounts[b] - categoryCounts[a]);

  return (
    <div className="w-full border-b border-slate-200 pb-6">
      <nav aria-label="포스트 필터 및 검색" className="flex flex-col gap-5">
        <section className="space-y-3">
          <h2 className="text-[12px] md:text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em] px-1">
            Search
          </h2>
          <PostSearch search={search} onSearchChange={onSearchChange} />
        </section>

        <section className="space-y-3">
          <h2 className="text-[12px] md:text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em] px-1">
            Categories
          </h2>
          <div
            className="flex gap-1 overflow-x-auto pb-2 [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="group"
            aria-label="카테고리 선택"
          >
            <div className="flex min-w-max gap-1 px-1">
              <Tag
                isActive={selectedCategory === "All"}
                onClick={() => onCategoryChange("All")}
                className="w-auto whitespace-nowrap justify-between items-center"
              >
                <span>All</span>
                <span
                  className={`ml-2 text-[11px] ${selectedCategory === "All" ? "text-black" : "text-slate-400"}`}
                >
                  {categoryCounts["All"]}
                </span>
              </Tag>

              {sortedCategories.map((category) => (
                <Tag
                  key={category}
                  isActive={selectedCategory === category}
                  onClick={() => onCategoryChange(category)}
                  className="w-auto whitespace-nowrap justify-between items-center"
                >
                  <span>{category}</span>
                  <span
                    className={`ml-2 text-[11px] ${selectedCategory === category ? "text-black" : "text-slate-400"}`}
                  >
                    {categoryCounts[category] || 0}
                  </span>
                </Tag>
              ))}
            </div>
          </div>
        </section>
      </nav>
    </div>
  );
};
