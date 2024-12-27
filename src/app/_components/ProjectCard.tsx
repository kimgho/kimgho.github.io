"use client";
import Link from "next/link";

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
}

export default function ProjectCard({
  index,
  title,
  description,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${index}`}>
      <div
        key={index}
        className="bg-white border border-gray-500 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 hover:duration-200 cursor-pointer"
      >
        <div className="aspect-video bg-gray-700 dark:bg-gray-700" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  );
}
