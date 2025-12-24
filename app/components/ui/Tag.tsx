interface TagProps {
  children: React.ReactNode;
}

export const Tag = ({ children }: TagProps) => {
  return <span className="text-blue-600 bg-blue-600/10 px-2 py-0.5 rounded">{children}</span>;
};
