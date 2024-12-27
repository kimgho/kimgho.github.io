interface ContainerProps {
  children: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return (
    <div className="bg-black border text-white border-black dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      {children}
    </div>
  );
}
