import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";
import { ValueBox } from "@/components/value-box";

export const MyValues = () => {
  return (
    <Container className="py-[64px] md:py-[128px]">
      <div className="w-full flex flex-col items-center justify-center gap-y-[64px] md:gap-y-[128px] text-[--black]">
        <Header
          title="My Values"
          description="I like to promise only what I can deliver and then deliver more than I promise."
        />
        <div className="flex flex-col gap-y-[32px] md:gap-y-[96px] md:w-[790px]">
          <div className="flex flex-col md:flex-row items-center w-full gap-y-[32px] md:gap-x-[64px]">
            <ValueBox
              title="On-time delivery"
              description="I understand the value of your time, and I want to assure you that I am committed to delivering exactly what you've paid for, as promised."
            />
            <ValueBox
              title="Quality"
              description="My top priority is always ensuring quality, as I strive to deliver a final result that you will genuinely appreciate."
            />
          </div>
          <div className="flex flex-col md:flex-row items-center w-full gap-y-[32px] md:gap-x-[64px]">
            <ValueBox
              title="Humility"
              description="I am grateful for the opportunities I've been given and humbled by the support I've received along the way."
            />
            <ValueBox
              title="Kindness"
              description="Small acts of kindness can brighten someone's day and create a ripple effect of positivity in the world."
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
