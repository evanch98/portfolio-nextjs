import Button from "@/components/common/button";
import { cn } from "@/lib/utils";
import Placeholder from "@/public/assets/placeholder.jpg";
import Image from "next/image";

interface ProjectCardProps {
  imageSide?: "left" | "right";
}

export const ProjectCard = ({ imageSide = "left" }: ProjectCardProps) => {
  return (
    <div className={cn("flex items-center justify-between w-full", imageSide === "right" ? "flex-row-reverse" : "")}>
      <div className="w-[690px] h-[500px] relative">
        <Image src={Placeholder} layout="fill" objectFit="cover" alt="Image" />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-[24px] w-[380px]">
        <h1 className="heading-3">Little Lemon Restaurant</h1>
        <div className="w-full flex flex-col items-center justify-center gap-y-[48px]">
          <p className="paragraph opacity-75">
            Designing a streamlined restaurant website that helps customers
            explore menu, order online, and reserve a table with ease.
          </p>
          <Button variant="normal">Read Case Study</Button>
        </div>
      </div>
    </div>
  );
};
