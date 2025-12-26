"use client";

import Image from "next/image";
import Link from "next/link";

import { Tag } from "@/app/components/ui/Tag";

import { PostData } from "@/app/utils/posts";

interface LatestPostProps {
  post: PostData;
}

export const LatestPost = ({ post }: LatestPostProps) => {
  return (
    <article className="w-full">
      <Link
        href={`/posts/${post.slug}`}
        className="group relative block overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 transition-all duration-300 shadow-sm hover:shadow-md"
        aria-labelledby="hero-post-title"
      >
        <div className="relative h-80 md:h-100 w-full">
          {post.thumbnail ? (
            <Image
              src={post.thumbnail}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-90"
              loading="eager"
            />
          ) : (
            <div className="w-full h-full bg-slate-800" />
          )}

          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/40 to-transparent" />

          <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full text-white">
            <div className="flex flex-col gap-4 max-w-3xl">
              <div className="flex items-center gap-3">
                {post.tag[0] && (
                  <Tag className="bg-blue-600 text-white border-none">{post.tag[0]}</Tag>
                )}
                <time dateTime={post.date} className="text-slate-300 text-sm font-medium">
                  {post.date}
                </time>
              </div>

              <h2
                id="hero-post-title"
                className="text-3xl md:text-5xl font-bold leading-tight transition-colors group-hover:text-blue-400"
              >
                {post.title}
              </h2>

              <p className="text-slate-300 text-base md:text-xl line-clamp-2 max-w-2xl">
                {post.description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
