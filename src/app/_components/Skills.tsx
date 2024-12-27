import Container from "@/app/_components/Container";
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
              className="px-3 py-1 text-black bg-gray-400 dark:bg-gray-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}