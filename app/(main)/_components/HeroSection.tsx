"use client";

import { useRef } from "react";

import { useTypingEffect } from "@/app/(main)/_hooks/useTypingEffect";

export const HeroSection = () => {
  const fullText = "안녕하세요.\n프론트엔드 개발자를 꿈꾸는 김건호입니다.";
  const visibleRef = useRef<HTMLSpanElement>(null);
  const invisibleRef = useRef<HTMLSpanElement>(null);

  useTypingEffect(fullText, visibleRef, invisibleRef);

  return (
    <section className="flex flex-col items-center justify-center md:py-12 text-center">
      <h1 className="text-gray-main text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter whitespace-pre-wrap">
        <span ref={visibleRef} className="relative"></span>

        <span
          ref={invisibleRef}
          className="text-transparent select-none selection:bg-transparent"
          aria-hidden="true"
        >
          {fullText}
        </span>
      </h1>
    </section>
  );
};
