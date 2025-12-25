import { ReactNode } from "react";

interface ResumeCardProps {
  title: string;
  subtitle?: string;
  period?: string;
  children?: ReactNode;
}

export const ResumeCard = ({ title, subtitle, period, children }: ResumeCardProps) => {
  return (
    <article className="bg-white p-6 rounded-xl">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-main">{title}</h3>
          {subtitle && <p className="text-gray-secondary font-medium">{subtitle}</p>}
        </div>
        {period && (
          <time className="text-sm text-gray-main bg-gray-100 px-3 py-1 rounded-full self-start sm:self-center">
            {period}
          </time>
        )}
      </header>
      {children && (
        <ul className="list-disc list-inside text-gray-sub space-y-2 mb-4 marker:text-gray-400">
          {children}
        </ul>
      )}
    </article>
  );
};
