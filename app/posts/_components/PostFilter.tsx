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
  return (
    <aside className="w-full md:w-60 shrink-0">
      <nav
        aria-label="포스트 필터 및 검색"
        className="flex flex-col gap-6 md:gap-12 md:sticky md:top-28"
      >
        <section className="space-y-3 md:space-y-4">
          <h2 className="text-[12px] md:text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em] px-1">
            Search
          </h2>
          <PostSearch search={search} onSearchChange={onSearchChange} />
        </section>

        <section className="space-y-3 md:space-y-4">
          <h2 className="text-[12px] md:text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em] px-1">
            Categories
          </h2>
          <div
            className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0 [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="group"
            aria-label="카테고리 선택"
          >
            <div className="flex flex-row md:flex-col gap-1 min-w-max md:min-w-0 px-1 md:px-0">
              <Tag
                isActive={selectedCategory === "All"}
                onClick={() => onCategoryChange("All")}
                className="w-auto md:w-full whitespace-nowrap justify-between items-center"
              >
                <span>All</span>
                <span
                  className={`ml-2 text-[11px] ${selectedCategory === "All" ? "text-black" : "text-slate-400"}`}
                >
                  {categoryCounts["All"]}
                </span>
              </Tag>

              {categories.map((category) => (
                <Tag
                  key={category}
                  isActive={selectedCategory === category}
                  onClick={() => onCategoryChange(category)}
                  className="w-auto md:w-full whitespace-nowrap justify-between items-center"
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
    </aside>
  );
};
