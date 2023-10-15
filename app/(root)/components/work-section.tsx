import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";
import { ProjectCard } from "./project-card";

export const WorkSection = () => {
  return (
    <Container className="md:pt-[256px] pt-[64px] md:pb-[128px] pb-[32px] text-[--black]">
      <div
        id="my-work"
        className="flex flex-col items-center justify-center w-full md:gap-y-[128px] gap-y-[32px]"
      >
        <Header
          title="My work"
          description="I specialize in designing and building modern-looking and user-centered websites."
        />
        {/* TODO: Update the ProjectCard and projects */}
        <div className="w-full flex flex-col items-center justify-center md:space-y-[96px] space-y-[56px]">
          <ProjectCard />
          <ProjectCard imageSide="right" />
          <ProjectCard />
          <ProjectCard imageSide="right" />
        </div>
      </div>
    </Container>
  );
};
