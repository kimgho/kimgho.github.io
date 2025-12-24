"use client";

import { useState } from "react";

import Link from "next/link";

import { Menu } from "lucide-react";

import { MobileSidebar } from "@/app/components/shared/MobileSidebar";

import { NAV_LINKS } from "@/app/constants/nav";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-solid border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="px-4 md:px-10 py-3 flex items-center justify-between mx-auto ">
          <Link href="/" className="flex items-center gap-3">
            <h1 className="text-gray-main text-xl font-bold leading-tight tracking-tight">
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
                  className="text-gray-main hover:text-black hover:underline text-sm font-medium transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <button
            className="md:hidden text-gray-main p-1 -mr-1 hover:bg-slate-100 rounded-md transition-colors"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined">
              <Menu />
            </span>
          </button>
        </div>
      </header>
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
