import Image from "next/image";
import Link from "next/link";

import { Tag } from "@/app/components/ui/Tag";

import { PostData } from "@/app/utils/posts";

interface Props {
  post: PostData;
}

export const PostCard = ({ post }: Props) => {
  return (
    <article className="group flex flex-col md:flex-row gap-6 p-5 rounded-xl bg-white border border-slate-200 hover:border-black/30 transition-all cursor-pointer">
      <Link href={`/posts/${post.slug}`} className="flex flex-col md:flex-row gap-6 w-full">
        <figure className="w-full md:w-48 aspect-video md:aspect-square shrink-0 rounded-lg bg-slate-100 overflow-hidden">
          {post.thumbnail && (
            <Image
              src={post.thumbnail}
              alt={`${post.title}의 썸네일`}
              width={300}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </figure>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-gray-sub">
            <ul className="flex gap-1 flex-wrap" aria-label="태그 목록">
              {post.tag.map((tag) => (
                <li key={tag}>
                  <Tag>{tag}</Tag>
                </li>
              ))}
            </ul>
            <span aria-hidden="true">•</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <h3 className="text-gray-main text-xl font-bold leading-tight transition-colors">
            {post.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">{post.description}</p>
        </div>
      </Link>
    </article>
  );
};
