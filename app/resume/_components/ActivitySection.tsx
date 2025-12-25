import { ResumeCard } from "@/app/resume/_components";
import { ACTIVITIES } from "@/app/resume/_constants";

export const ActivitySection = () => {
  return (
    <section aria-labelledby="activity-title">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-1 bg-black/50 rounded-full" aria-hidden="true"></div>
        <h2 id="activity-title" className="text-3xl font-bold text-gray-main">
          Activity
        </h2>
      </div>
      <ol className="space-y-6">
        {ACTIVITIES.map((activity) => (
          <li key={activity.title} className="relative border-gray-200">
            <ResumeCard title={activity.title} subtitle={activity.role} period={activity.period}>
              {activity.descriptions.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ResumeCard>
          </li>
        ))}
      </ol>
    </section>
  );
};
