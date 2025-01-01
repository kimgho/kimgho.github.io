"use client";

import React, { useState } from "react";
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
import { ModeToggle } from "@/components/ModeToggle";

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeSheet = () => setIsOpen(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu size={40} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <div className="flex flex-row items-center justify-around w-full">
            <SheetTitle>DEVKIM</SheetTitle>
            <div className="mb-2">
              <ModeToggle />
            </div>
          </div>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-16 ml-6">
          <LinkItem
            href="/posts"
            Nav="글"
            isMainNav={true}
            onClick={closeSheet}
          />
          <LinkItem
            href="/projects"
            Nav="프로젝트"
            isMainNav={true}
            onClick={closeSheet}
          />
          <LinkItem
            href="https://github.com/kimgho"
            Nav="github"
            isMainNav={true}
            onClick={closeSheet}
          />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
