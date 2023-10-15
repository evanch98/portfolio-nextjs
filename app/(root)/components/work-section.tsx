import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";
import { ProjectCard } from "./project-card";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { cn } from "@/lib/utils";

const categories = [
  {
    value: "web applications",
    label: "Web Applications",
  },
  {
    value: "ui/ux",
    label: "UI/UX",
  },
];

export const WorkSection = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("web applications");

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
              <button
                role="combobox"
                aria-aria-expanded={open}
                className="flex items-center justify-center gap-x-[16px] py-[16px] px-[24px] border border-[--black] rounded-full"
              >
                {categories.find((category) => category.value === value)?.label}
                <ChevronsUpDown className="ml-2 h-[20px] w-[20px] shrink-0" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandGroup>
                  {categories.map((category) => (
                    <CommandItem
                      key={category.value}
                      onSelect={(currentValue) => {
                        console.log(currentValue);

                        setValue(currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === category.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {category.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
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
