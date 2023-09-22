import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";
import { SkillBox } from "@/components/skill-box";

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
            <SkillBox name="Design" />
          </section>
          <section className="flex flex-col items-center justify-center gap-y-[24px] w-full">
            <h2 className="heading-3">Tools</h2>
            <SkillBox name="Figma" />
          </section>
        </div>
      </div>
    </Container>
  );
};
