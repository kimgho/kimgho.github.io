import { Badge } from "@/components/ui/badge";

export default function TitleBadge({ tag }: { tag: string }) {
  return (
    <Badge
      key={tag}
      variant="outline"
      className="px-3 py-1 text-black bg-white dark:bg-gray-400 text-sm rounded-full font-medium"
    >
      {tag}
    </Badge>
  );
}
