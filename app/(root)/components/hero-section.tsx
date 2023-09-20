import { Container } from "@/components/common/container";

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
            <button className="px-[32px] py-[16px] flex items-center justify-center border border-[--primary-200] uppercase rounded-full">
              View my work
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
