import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";

export const AboutMe = () => {
  return (
    <Container className="py-[128px]">
      <div className="w-full px-[104px] flex flex-col items-center justify-center gap-y-[128px]">
        <Header
          title="Who I Am"
          description="I am pursuing a Bachelor of Science in Computer Science at the University of the People."
        />
      </div>
    </Container>
  );
};
