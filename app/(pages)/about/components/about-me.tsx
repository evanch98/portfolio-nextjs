import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";

export const AboutMe = () => {
  return (
    <Container className="py-[128px]">
      <div className="w-full px-[104px] flex flex-col items-center justify-center gap-y-[128px] text-[--black]">
        <Header
          title="Who I Am"
          description="I am pursuing a Bachelor of Science in Computer Science at the University of the People."
        />
        <div className="w-full items-center justify-between">
          <div className="flex flex-col w-[490px] gap-y-[24px] opacity-75 paragraph">
            <p>
              My name is Kyaw Thu, and a lot of people know me as Evan. I was
              born and raised in Burma (Myanmar). I moved to Taiwan in 2021, and
              I am currently living there. I am a computer science student at
              the University of the People since 2021.
            </p>
            <p>
              I have spent six years studying medicine at the University of
              Medicine (1), Yangon from 2014 to 2020. Due to several reasons,
              including pandemic, I decided to drop out of the university.{" "}
            </p>
            <p>
              For as long as I can remember, I have always been into technology
              and working with computers. In 2021, I dived into the world of
              technology and started learning programming.
            </p>
            <p>
              After exploring several career options, I was quickly drawn to web
              design and development. Since then, I started learning UI/UX and
              front-end development. I am passionate about helping business grow
              through beautiful, modern-looking, and user-centered websites.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
