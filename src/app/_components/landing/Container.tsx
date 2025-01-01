interface ContainerProps {
  children: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return (
    <div className="bg-black border text-white border-black dark:border-white/30 dark:bg-gray-700 rounded-lg p-6 shadow-xs">
      {children}
    </div>
  );
}
