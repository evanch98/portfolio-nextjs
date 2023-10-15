import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";
import { ProjectCard } from "./project-card";
import { useState } from "react";
import { Popover } from "@/components/ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { ChevronsUpDown } from "lucide-react";

const categories = [
  {
    value: "webApp",
    label: "Web Applications",
  },
  {
    value: "uiux",
    label: "UI/UX",
  },
];

export const WorkSection = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("webApp");

  return (
    <Container className="md:pt-[256px] pt-[64px] md:pb-[128px] pb-[32px] text-[--black]">
      <div
        id="my-work"
        className="flex flex-col items-center justify-center w-full md:gap-y-[128px] gap-y-[32px]"
      >
        <Header
          title="My work"
          description="I specialize in designing and building modern-looking and user-centered websites."
        />
        <div className="w-full md:space-y-[48px] space-y-[32px]">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button className="flex items-center justify-center gap-x-[16px] py-[16px] px-[24px] border border-[--black] rounded-full">
                {categories.find((category) => category.value === value)?.label}
                <ChevronsUpDown className="ml-2 h-[20px] w-[20px] shrink-0" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0"></PopoverContent>
          </Popover>
          {/* TODO: Update the ProjectCard and projects */}
          <div className="w-full flex flex-col items-center justify-center md:space-y-[96px] space-y-[56px]">
            <ProjectCard />
            <ProjectCard imageSide="right" />
            <ProjectCard />
            <ProjectCard imageSide="right" />
          </div>
        </div>
      </div>
    </Container>
  );
};
