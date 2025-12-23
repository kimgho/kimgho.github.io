import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-10 flex flex-col gap-4">
        <h1 className="text-gray-1 text-3xl font-bold">Main Text (#111111)</h1>
        <p className="text-gray-2 text-xl">Secondary Text (#505050)</p>
        <p className="text-gray-3">Tertiary Text (#767676)</p>
        <p className="text-gray-4">Quaternary Text (#999999)</p>
      </div>
      <Link href="/resume" title="이력서">
        Resume
      </Link>
    </>
  );
}
