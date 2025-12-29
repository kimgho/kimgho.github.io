"use client";

import { useTOCScroll, Heading } from "@/app/posts/hooks/useTOCScroll";

interface Props {
  headings: Heading[];
}

export const TableOfContents = ({ headings }: Props) => {
  const { activeId, handleScroll } = useTOCScroll(headings);

  return (
    <nav className="flex flex-col gap-0.5 border-l border-slate-100 max-h-[calc(100vh-160px)] overflow-y-auto scrollbar-hide pb-10">
      {headings.map((heading) => (
        <a
          key={heading.slug}
          href={`#${heading.slug}`}
          onClick={(e) => handleScroll(e, heading.slug)}
          className={`
            block py-1.5 pr-4 text-[13px] transition-all border-l-2 -ml-px
            ${heading.level === 3 ? "pl-8" : heading.level === 2 ? "pl-5" : "pl-3"}
            ${
              activeId === heading.slug
                ? "text-blue-600 font-semibold border-blue-600 bg-blue-50/50"
                : "text-slate-500 border-transparent hover:text-slate-900 hover:border-slate-300"
            }
          `}
        >
          {heading.text}
        </a>
      ))}
    </nav>
  );
};
