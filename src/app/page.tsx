import AboutMe from "@/app/_components/landing/AboutMe";
import LatestPosts from "@/app/_components/post/LatestPosts";
import LatestProjects from "@/app/_components/projects/LatestProjects";
import Outline from "@/app/_components/landing/Outline";
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
