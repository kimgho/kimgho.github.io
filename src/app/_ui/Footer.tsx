import TopScroll from "@/app/_components/layout/TopScroll";

export default function Footer() {
  return (
    <div>
      <TopScroll />
      <footer className="bg-white border-t border-border/90  p-8 text-center dark:bg-gray-700">
        <p className="text-xs">&copy; 2024 Glog</p>
      </footer>
    </div>
  );
}
