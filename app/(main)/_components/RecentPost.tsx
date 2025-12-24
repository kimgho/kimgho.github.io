import Image from "next/image";
import Link from "next/link";

import { Tag } from "@/app/components/ui/Tag";

import { PostData } from "@/app/utils/posts";

interface Props {
  post: PostData;
}

export const RecentPost = ({ post }: Props) => {
  return (
    <article className="group cursor-pointer rounded-xl overflow-hidden bg-white shadow-sm border border-slate-200 hover:shadow-md hover:border-black/50 transition-all duration-300">
      <Link href={`/posts/${post.slug}`} className="flex flex-col">
        <figure className="w-full aspect-video bg-slate-100 relative">
          <Image
            src={post.thumbnail!}
            alt={`${post.title}의 썸네일`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
            priority
          />
        </figure>
        <div className="flex flex-col p-6 gap-4">
          <div className="flex items-center gap-3 text-xs font-medium text-gray-sub">
            <ul className="flex gap-2" aria-label="태그 목록">
              {post.tag.map((tag) => (
                <li key={tag}>
                  <Tag>{tag}</Tag>
                </li>
              ))}
            </ul>
            <span aria-hidden="true">•</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <h3 className="text-gray-main text-2xl font-bold leading-tight group-hover:text-black transition-colors">
            {post.title}
          </h3>
          <p className="text-slate-600 text-base leading-relaxed line-clamp-2">
            {post.description}
          </p>
        </div>
      </Link>
    </article>
  );
};
