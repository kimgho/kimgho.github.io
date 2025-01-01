"use client";
import { ChevronsUp } from "lucide-react";

export default function TopScroll() {
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="fixed right-4 bottom-10 p-2 bg-gray-200 rounded-full cursor-pointer"
    >
      <ChevronsUp />
    </button>
  );
}
