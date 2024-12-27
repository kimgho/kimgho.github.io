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
    <div
      key={index}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-video bg-gray-100 dark:bg-gray-700" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}
