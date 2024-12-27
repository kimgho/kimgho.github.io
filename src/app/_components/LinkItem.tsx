import Link from "next/link";

interface NavProps {
  href: string;
  Nav: string;
  isMainNav?: boolean;
}

export default function LinkItem({ href, Nav, isMainNav }: NavProps) {
  return (
    <div
      className={`w-auto h-auto ${
        isMainNav
          ? "border-b-2 border-transparent hover:border-blue-300 transition-all duration-200"
          : ""
      }`}
    >
      <Link href={href} className="text-gray-800">
        {" "}
        {/** github의 경우 새창으로 열기? target="_blank" */}
        {Nav}
      </Link>
    </div>
  );
}
