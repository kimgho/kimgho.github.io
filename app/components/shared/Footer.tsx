export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-[#232f48] bg-slate-100 dark:bg-[#0d121c] py-10 mt-10">
      <div className="max-w-300 mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 dark:text-white">Kimgho</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
