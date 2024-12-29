"use client";

import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LinkItem from "@/app/_components/layout/LinkItem";

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu size={40} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>DEVKIM</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-16 ml-6">
          <LinkItem href="/posts" Nav="글" isMainNav={true} />
          <LinkItem href="/projects" Nav="프로젝트" isMainNav={true} />
          <LinkItem
            href="https://github.com/kimgho"
            Nav="github"
            isMainNav={true}
          />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
