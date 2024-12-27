import AboutMe from "@/app/_components/AboutMe";
import LatestPosts from "@/app/_components/LatestPosts";
import LatestProjects from "@/app/_components/LatestProjects";
import Outline from "@/app/_components/Outline";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Outline />
      <AboutMe />
      <LatestPosts />
      <LatestProjects />
    </main>
  );
}
