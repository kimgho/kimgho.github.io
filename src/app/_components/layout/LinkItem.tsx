import Link from "next/link";

interface NavProps {
  href: string;
  Nav: string;
  isMainNav?: boolean;
  onClick?: () => void;
}

export default function LinkItem({ href, Nav, isMainNav, onClick }: NavProps) {
  return (
    <div
      onClick={onClick}
      className={`w-auto h-auto ${
        isMainNav
          ? "border-b-2 border-transparent hover:border-blue-300 transition-all duration-200"
          : ""
      }`}
    >
      <Link href={href}>
        {/** github의 경우 새창으로 열기? target="_blank" */}
        {Nav}
      </Link>
    </div>
  );
}
