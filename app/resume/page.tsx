import { Metadata } from "next";

import {
  ActivitySection,
  EducationSection,
  AwardSection,
  IntroduceSection,
} from "@/app/resume/_components";

export const metadata: Metadata = {
  title: "김건호 - 자기소개",
  description: "김건호의 자기소개 페이지입니다.",
  keywords: ["김건호", "자기 소개", "Resume"],
  openGraph: {
    title: "김건호 - 자기소개",
    description: "김건호의 자기소개 페이지입니다.",
    type: "website",
    url: "https://kimgho.github.io/resume",
    siteName: "김건호 - 자기소개",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "김건호 - 자기소개",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "김건호 - 자기소개",
    description: "김건호의 자기소개 페이지입니다.",
    images: ["/og-image.png"],
  },
};

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
