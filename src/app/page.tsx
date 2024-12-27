import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ">
          Frontend Developer KIMGHO
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          웹 개발에 대한 열정과 끊임없는 학습을 통해 성장하는 프론트엔드
          개발자입니다.
        </p>
      </section>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-3xl font-bold">{">_About Me"}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">한 줄 소개</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  새로운 기술을 배우고 적용하는 것을 좋아하며, UX/DX모두 관심이
                  있고, 깔끔한 코드를 위해 항상 공부하고 있습니다.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Node.js",
                    "TailwindCSS",
                    "Git",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-3xl font-bold ">{">_Featured Projects"}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-gray-100 dark:bg-gray-700" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    프로젝트 간단 설명이 들어갈 자리입니다.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
