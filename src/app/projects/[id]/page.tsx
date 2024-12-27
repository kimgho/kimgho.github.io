import { projects } from "@/app/projects/_mock/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  const { id } = params;
  //   const project = projects.find((project) => [project.id](http://project.id) === parseInt(id));
  const project = projects.find((project) => project.id === parseInt(id));
  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <section className="container mx-auto px-4 py-16 mt-16">
        <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
      </section>
    </main>
  );
}
