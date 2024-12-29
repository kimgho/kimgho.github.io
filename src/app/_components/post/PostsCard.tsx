import Link from "next/link";
import Image from "next/image";
import TagBadge from "@/app/_components/common/TagBadge";
interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
  thumbnail?: string;
}

export default function PostCard({
  slug,
  title,
  description,
  date,
  tags,
  thumbnail,
}: ProjectCardProps) {
  return (
    <Link
      href={`/posts/${slug}`}
      className="bg-white border border-gray-500 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 hover:duration-200 cursor-pointer"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={thumbnail || "/test.webp"}
          priority={false}
          alt={title}
          fill
          className="aspect-square group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 border-t dark:bg-gray-900">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-col items-start justify-between">
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(date).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>

          {tags && tags.length > 0 && (
            <div className="flex flex-row flex-wrap gap-2 mt-2">
              {tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
