import Button from "@/components/common/button";
import { Container } from "@/components/common/container";
import { FaChevronRight, FaArrowRight } from "react-icons/fa6";

export const HeroSection = () => {
  return (
    <div className="hero-background w-full h-full">
      <Container className="py-[128px]">
        <div className="flex flex-col items-center justify-center gap-y-[32px] text-[--primary-100]">
          <h2 className="heading-3">Hey there, I'm Kyaw Thu</h2>
          <h1 className="heading-2 text-center">
            Freelance UX/UI designer & web developer based in Taiwan
          </h1>
          <div className="flex flex-col items-center justify-center gap-y-[48px] text-[--primary-200]">
            <p className="paragraph text-center">
              A designer/front-end developer with a passion for helping startups
              through unique and user-centered design.
            </p>
            <Button variant="hero" className="group">
              View my work{" "}
              <FaArrowRight className="w-[20px] h-[20px] group-hover:rotate-90 ease-in duration-300" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
