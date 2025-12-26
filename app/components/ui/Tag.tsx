interface TagProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Tag = ({ children, isActive, onClick, className = "" }: TagProps) => {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`flex items-center w-full rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-gray-200 text-black shadow-sm"
            : "text-slate-500 hover:bg-slate-100 hover:text-black"
        } ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <span
      className={`inline-flex items-center text-blue-600 bg-blue-600/10 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${className}`}
    >
      {children}
    </span>
  );
};
