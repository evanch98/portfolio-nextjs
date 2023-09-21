import Button from "@/components/common/button";
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
        <div className="w-full flex flex-col items-center justify-center gap-y-[32px]">
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
