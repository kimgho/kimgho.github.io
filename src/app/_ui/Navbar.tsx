"use client";

import React from "react";
import LinkItem from "../_components/layout/LinkItem";
import { MobileSidebar } from "../_components/layout/MoblieSidebar";
import { ModeToggle } from "@/components/ModeToggle";

const Navbar = () => {
  return (
    <nav className="fixed py-4 inset-x-0 top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-0 supports-backdrop-filter:bg-background/60">
      <div className="relative px-5 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="font-bold lg:text-xl lg:font-semibold ">
            <LinkItem href="/" Nav="<DEVKIM/>" />
          </div>
          <div className="hidden md:flex gap-8 md:text-xl">
            <LinkItem href="/posts" Nav="글" isMainNav={true} />
            <LinkItem href="/projects" Nav="프로젝트" isMainNav={true} />
            <LinkItem
              href="https://github.com/kimgho"
              Nav="github"
              isMainNav={true}
            />
            <ModeToggle />
          </div>
          <MobileSidebar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
