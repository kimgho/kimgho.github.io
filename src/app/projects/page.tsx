import ProjectCard from "@/app/_components/projects/ProjectCard";
import { projects } from "@/app/projects/_mock/projects";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <section className="container mx-auto px-4 py-16 mt-16">
        <h1 className="text-4xl font-bold text-center mb-8">Project History</h1>
        <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-400">
          지금까지 진행한 프로젝트들의 개요입니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              index={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
