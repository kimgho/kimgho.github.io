import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/_ui/Navbar";
import Footer from "@/app/_ui/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../static/PretendardVariable.woff2",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "GLOG",
  description: "GLOG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard} bg-gray-100 dark:bg-black antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
