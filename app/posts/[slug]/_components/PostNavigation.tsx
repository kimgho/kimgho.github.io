import Link from "next/link";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { PostData } from "@/app/utils/posts";

interface PostNavigationProps {
  olderPost: PostData | null;
  newerPost: PostData | null;
}

export function PostNavigation({ olderPost, newerPost }: PostNavigationProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {olderPost ? (
        <Link
          href={`/posts/${olderPost.slug}`}
          className="group flex flex-col gap-1 p-4 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:bg-blue-50/50 transition-all text-left"
        >
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            이전 글
          </div>
          <div className="font-display font-semibold text-slate-900 group-hover:text-blue-700 line-clamp-2">
            {olderPost.title}
          </div>
        </Link>
      ) : (
        <div />
      )}

      {newerPost ? (
        <Link
          href={`/posts/${newerPost.slug}`}
          className="group flex flex-col gap-1 p-4 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:bg-blue-50/50 transition-all text-right items-end"
        >
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
            다음 글
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </div>
          <div className="font-display font-semibold text-slate-900 group-hover:text-blue-700 line-clamp-2">
            {newerPost.title}
          </div>
        </Link>
      ) : null}
    </div>
  );
}
