import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";
import { SkillBox } from "@/components/skill-box";

const skills = [
  "Journey Maps",
  "User Flow",
  "Wireframes",
  "Prototypes",
  "UI Design",
  "Design Systems",
  "Web Development",
];

const tools = [
  "Figma",
  "InkScape",
  "VS Code",
  "React",
  "HTML + CSS",
  "Flutter",
  "Notion",
];

export const Capabilities = () => {
  return (
    <Container className="py-[128px]">
      <div className="flex flex-col gap-y-[128px] items-center justify-center">
        <Header
          title="Capabilities"
          description="Transforming complex ideas into intuitive and human-centered experiences"
        />
        <div className="flex items-center justify-center gap-x-[24px] w-[590px]">
          <section className="flex flex-col items-center justify-center gap-y-[24px] w-full">
            <h2 className="heading-3">Skills</h2>
            {skills.map((skill, index) => (
              <SkillBox
                key={skill}
                name={skill}
                border={index === skills.length - 1 ? "topAndBottom" : "top"}
              />
            ))}
          </section>
          <section className="flex flex-col items-center justify-center gap-y-[24px] w-full">
            <h2 className="heading-3">Tools</h2>
            {tools.map((tool, index) => (
              <SkillBox
                key={tool}
                name={tool}
                border={index === tools.length - 1 ? "topAndBottom" : "top"}
              />
            ))}
          </section>
        </div>
      </div>
    </Container>
  );
};
