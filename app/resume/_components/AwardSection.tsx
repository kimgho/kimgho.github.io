import { ResumeCard } from "@/app/resume/_components";
import { AWARDS, PUBLICATIONS } from "@/app/resume/_constants";

export const AwardSection = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-1 bg-black/50 rounded-full"></div>
        <h2 className="text-3xl font-bold text-gray-main">Awards & Publications</h2>
      </div>
      <div className="space-y-6">
        <div className="relative border-gray-200 space-y-2">
          <ResumeCard title="Awards">
            {AWARDS.map((a) => (
              <li key={a.title}>
                {a.title} ({a.organization}) - {a.period}
              </li>
            ))}
          </ResumeCard>
        </div>
        <div className="relative border-gray-200 space-y-2">
          <ResumeCard title="Publication">
            {PUBLICATIONS.map((a) => (
              <li key={a.title}>
                {a.title} ({a.organization}) - {a.period}
              </li>
            ))}
          </ResumeCard>
        </div>
      </div>
    </section>
  );
};
