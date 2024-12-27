"use client";

import React from "react";
import LinkItem from "./LinkItem";
import { MobileSidebar } from "./MoblieSidebar";

const Navbar = () => {
  return (
    <nav className="py-4 border-b-2 border-gray-200">
      <div className="relative px-5 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="font-bold lg:text-xl lg:font-semibold">
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
          </div>
          <MobileSidebar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
