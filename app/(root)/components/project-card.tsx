import { Container } from "@/components/common/container";
import Placeholder from "@/public/assets/placeholder.jpg";
import Image from "next/image";

export const ProjectCard = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="w-[690px] h-[500px] relative">
        <Image src={Placeholder} layout="fill" objectFit="cover" alt="Image" />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-[24px] w-[380px]">
        <h1 className="heading-3">Little Lemon Restaurant</h1>
      </div>
    </div>
  );
};
