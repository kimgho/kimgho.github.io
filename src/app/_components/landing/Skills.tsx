import Container from "@/app/_components/landing/Container";
import { skills } from "@/app/_const/skill";

export default function Skills() {
  return (
    <div>
      <Container>
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-black bg-white dark:bg-gray-400 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}
