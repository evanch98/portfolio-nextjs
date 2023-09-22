import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";

export const Capabilities = () => {
  return (
    <Container className="py-[128px]">
      <div className="flex flex-col gap-y-[128px] items-center justify-center">
        <Header
          title="Capabilities"
          description="Transforming complex ideas into intuitive and human-centered experiences"
        />
      </div>
    </Container>
  );
};
