import ProjectCard from "@/app/_components/projects/ProjectCard";

const mockProjects = [
  {
    index: 1,
    title: "Project 1",
    description: "Project",
  },
  {
    index: 2,
    title: "Project 2",
    description: "Project",
  },
  {
    index: 3,
    title: "Project 3",
    description: "Project",
  },
];

export default function LatestProjects() {
  return (
    <section className="container mx-auto px-2 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-3xl font-bold ">{">_Latest Projects"}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project) => (
            <ProjectCard
              key={project.index}
              index={project.index}
              description={project.description}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
