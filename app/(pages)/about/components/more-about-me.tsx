import { Container } from "@/components/common/container";
import { ValueBox } from "@/components/value-box";

export const MoreAboutMe = () => {
  return (
    <Container className="py-[128px]">
      <div className="w-full flex items-center justify-start gap-x-[24px]">
        <ValueBox
          title="I love soccer ⚽"
          description="I grew up watching soccer. I spend most weekends evenings watching soccer."
        />
        <ValueBox
          title="I love to swim 🏊‍♂️"
          description="In another life, I might have been a professional swimmer. There's a good chance you will find me in a swimming pool."
        />
        <ValueBox
          title="I like it quiet 🏔️"
          description="I like music, but I find it distracting when I work. It might be weird, but that’s how I like it."
        />
      </div>
    </Container>
  );
};
