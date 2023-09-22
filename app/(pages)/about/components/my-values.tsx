import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";

export const MyValues = () => {
  return (
    <Container className="py-[128px]">
      <Header
        title="My Values"
        description="I like to promise only what I can deliver and then deliver more than I promise."
      />
    </Container>
  );
};
