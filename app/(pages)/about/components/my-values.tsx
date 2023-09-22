import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";

export const MyValues = () => {
  return (
    <Container className="py-[128px]">
      <div className="w-full flex flex-col items-center justify-center gap-y-[128px]">
        <Header
          title="My Values"
          description="I like to promise only what I can deliver and then deliver more than I promise."
        />
        <div className="flex flex-col gap-y-[96px] w-[790px]">
          <div className="flex items-center w-full gap-x-[64px]"></div>
          <div className="flex items-center w-full gap-x-[64px]"></div>
        </div>
      </div>
    </Container>
  );
};
