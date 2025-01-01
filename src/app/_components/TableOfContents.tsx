"use client";
import { TOCHeading } from "@/lib/mdx";
import { useEffect, useState } from "react";

interface TOCProps {
  headings: TOCHeading[];
}

export default function TableOfContents({ headings }: TOCProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map((heading) => ({
        id: heading.id,
        element: document.getElementById(heading.id),
      }));

      const scrollPosition = window.scrollY + 100;

      let currentSection = headingElements[0]?.id;

      for (const { id, element } of headingElements) {
        if (!element) continue;

        const sectionTop = element.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = id;
        } else {
          break;
        }
      }

      setActiveId(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="border-l border-border/80 dark:border-l-white fixed right-0 top-20 pl-5 hidden xl:block">
      <nav className="pr-10 w-80 py-6">
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={`heading-${heading.id}`}
              style={{ marginLeft: `${(heading.level - 1) * 16}px` }}
              className="transition-all duration-200 ease-in-out"
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={`text-base hover:text-primary transition-colors duration-200
                  ${
                    activeId === heading.id
                      ? "text-primary font-bold"
                      : "text-muted-foreground"
                  }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
