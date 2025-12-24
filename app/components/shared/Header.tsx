import Link from "next/link";

import { Menu } from "lucide-react";

import { NAV_LINKS } from "@/app/constants/nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-slate-200 dark:border-[#232f48] bg-white/80 dark:bg-bg-main/80 backdrop-blur-md">
      <div className="px-4 md:px-10 py-3 flex items-center justify-between mx-auto ">
        <Link href="/" className="flex items-center gap-3">
          <h1 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">
            Kimgho
          </h1>
        </Link>

        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                title={link.title}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-600 text-sm font-medium transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="md:hidden text-slate-900 dark:text-white">
          <span className="material-symbols-outlined">
            <Menu />
          </span>
        </div>
      </div>
    </header>
  );
}
