import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";
import {
  SiFigma,
  SiReact,
  SiNotion,
  SiTailwindcss,
  SiTypescript,
  SiInkscape,
} from "react-icons/si";

export const TechnicalStack = () => {
  return (
    <Container className="py-[64px] md:py-[128px]">
      <div className="flex w-full px-[104px] h-[615px] text-[--black] items-center justify-center">
        <div className="flex flex-col items-center justify-between h-full py-[96px]">
          <SiReact className="w-[64px] h-[64px] hover:text-[#149ECA] ease-in duration-300" />
          <SiTypescript className="w-[64px] h-[64px] hover:text-[#3178C6] ease-in duration-300" />
        </div>
        <div className="flex flex-col items-center justify-between h-full">
          <SiFigma className="w-[64px] h-[64px] hover:text-[#F0501E] ease-in duration-300" />
          <Header
            title="Technical Stack"
            description="I use a variety of tools that help me build advanced and interactive websites. Here are some of my favorites at the moment."
          />
          <SiNotion className="w-[64px] h-[64px] hover:text-[#010101] ease-in duration-300" />
        </div>
        <div className="flex flex-col items-center justify-between h-full py-[96px]">
          <SiTailwindcss className="w-[64px] h-[64px] hover:text-[#38BDF8] ease-in duration-300" />
          <SiInkscape className="w-[64px] h-[64px] hover:text-[#010101] ease-in duration-300" />
        </div>
      </div>
    </Container>
  );
};
