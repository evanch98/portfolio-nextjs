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
import Spotify from "@/public/assets/Spotify.svg";
import Admin from "@/public/assets/Admin.svg";
import Discord from "@/public/assets/Discord.svg";

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
            {value === "web applications" && (
              <>
                <ProjectCard
                  title="Spotify Clone"
                  description="Developed a full-stack Spotify Clone website using Next.js, TypeScript, Zustand, Tailwind CSS, Supabase, and Stripe."
                  buttonText="Learn More"
                  href="/projects/spotify"
                  image={Spotify}
                />
                <ProjectCard
                  title="E-Commerce Admin Dashboard"
                  description="Built using cutting-edge technologies like Next JS, TypeScript, Tailwind CSS, Shadcn UI, Planet Scale, Prisma, Zustand, Clerk Auth, and Cloudinary."
                  buttonText="Learn More"
                  href="/projects/ecommerce"
                  imageSide="right"
                  image={Admin}
                />
                <ProjectCard
                  title="Discord Clone"
                  description="Built using cutting-edge technologies like Next JS, TypeScript, Tailwind CSS, Shadcn UI, Planet Scale, Prisma, Zustand, Clerk Auth, Socket.io and UploadThing."
                  buttonText="Learn More"
                  href="/projects/discord"
                  image={Discord}
                />
              </>
            )}
            {value === "ui/ux" && (
              <div className="text-[--black] text-lg opacity-75 flex flex-col items-center justify-center">
                No project found.
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};
