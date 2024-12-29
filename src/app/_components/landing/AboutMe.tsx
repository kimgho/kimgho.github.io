import Container from "@/app/_components/landing/Container";
import Skills from "@/app/_components/landing/Skills";

export default function AboutMe() {
  return (
    <section className="container mx-auto px-2 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-3xl font-bold">{">_About Me"}</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 font-sans">
          <div className="lg:col-span-2">
            <Container>
              <h3 className="text-xl font-semibold mb-4">한 줄 소개</h3>
              <p className=" dark:text-gray-300">
                새로운 기술을 배우고 적용하는 것을 좋아하며, UX/DX모두 관심이
                있고, 깔끔한 코드를 위해 항상 공부하고 있습니다.
              </p>
            </Container>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
}
