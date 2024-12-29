import TitleBadge from "@/app/_components/common/Badge";
import Container from "@/app/_components/landing/Container";
import { skills } from "@/app/_const/skill";

export default function Skills() {
  return (
    <div>
      <Container>
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <TitleBadge key={skill} tag={skill} />
          ))}
        </div>
      </Container>
    </div>
  );
}
