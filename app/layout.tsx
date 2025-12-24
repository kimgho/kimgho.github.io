import type { Metadata } from "next";
import localFont from "next/font/local";

import Footer from "@/app/components/shared/Footer";
import Header from "@/app/components/shared/Header";

import "@/app/globals.css";

export const pretendard = localFont({
  src: "./fonts/Pretendard-Regular.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kimgho.github.io"),
  title: {
    template: "%s | 프론트엔드를 꿈꾸는 김건호의 블로그",
    default: "프론트엔드를 꿈꾸는 김건호의 블로그",
  },
  description: "프론트엔드를 꿈꾸는 김건호의 블로그",
  openGraph: {
    title: "프론트엔드를 꿈꾸는 김건호의 블로그",
    description: "프론트엔드를 꿈꾸는 김건호의 블로그",
    url: "https://kimgho.github.io",
    siteName: "프론트엔드를 꿈꾸는 김건호의 블로그",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "프론트엔드를 꿈꾸는 김건호의 블로그",
    description: "프론트엔드를 꿈꾸는 김건호의 블로그",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} antialiased`}>
        <div className="bg-bg-main text-white min-h-screen flex flex-col font-sans selection:bg-blue-600 selection:text-white">
          <Header />
          <main className="grow flex flex-col items-center w-full max-w-300 mx-auto">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
