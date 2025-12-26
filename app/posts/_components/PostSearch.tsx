"use client";

import { useId, useRef, useEffect } from "react";

import { Search } from "lucide-react";

import { GAPostEvents } from "@/app/utils/analytics";

import { useDebounce } from "@/app/posts/hooks/useDebounce";

interface PostSearchProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export const PostSearch = ({ search, onSearchChange }: PostSearchProps) => {
  const searchId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedSearchChange = useDebounce((value: string) => {
    onSearchChange(value);
    GAPostEvents.search(value);
  }, 300);

  useEffect(() => {
    if (inputRef.current && inputRef.current.value !== search) {
      inputRef.current.value = search;
    }
  }, [search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearchChange(e.target.value);
  };

  return (
    <div className="relative group">
      <label htmlFor={searchId} className="sr-only">
        원하는 키워드를 입력해주세요.
      </label>
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="size-4 text-slate-400 group-focus-within:text-black transition-colors" />
      </div>
      <input
        id={searchId}
        ref={inputRef}
        type="search"
        className="block w-full h-10 pl-10 pr-4 bg-white border border-slate-200 rounded-xl text-sm text-gray-main placeholder:text-slate-400 focus:outline-none focus:border-black/30 focus:ring-4 focus:ring-black/5 transition-all"
        placeholder="검색어를 입력하세요..."
        defaultValue={search}
        onChange={handleChange}
      />
    </div>
  );
};
