import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";
import { ProjectCard } from "./project-card";

export const WorkSection = () => {
  return (
    <Container className="pt-[256px] pb-[128px]">
      <div
        id="my-work"
        className="flex flex-col items-center justify-center w-full gap-y-[128px]"
      >
        <Header
          title="My work"
          description="I specialize in designing and building modern-looking and user-centered websites."
        />
        <div className="w-full mt-[128px] flex flex-col items-center justify-center space-y-[96px]">
          <ProjectCard />
        </div>
      </div>
    </Container>
  );
};
