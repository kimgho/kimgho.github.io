import {
  ActivitySection,
  EducationSection,
  AwardSection,
  IntroduceSection,
} from "@/app/resume/_components";

export default function Resume() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="lg:col-span-8 flex flex-col gap-8 lg:gap-12">
        <div className="flex-1 space-y-12">
          <IntroduceSection />
          <ActivitySection />
          <EducationSection />
          <AwardSection />
        </div>
      </div>
    </div>
  );
}
