"use client";

import { useEffect, useState } from "react";

interface Heading {
  text: string;
  level: number;
  slug: string;
}

interface Props {
  headings: Heading[];
}

export const TableOfContents = ({ headings }: Props) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -40% 0px" },
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.slug);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    const element = document.getElementById(slug);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(slug);
    }
  };

  return (
    <nav className="flex flex-col gap-0.5 border-l border-slate-100">
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
