"use client";

import ProjectCard from "./ProjectCard";

const CardStack = () => {
  return (
    <div className="relative w-[300px] h-[300px]">
      <ProjectCard className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FCD968] z-50" />
      <ProjectCard className="absolute top-[45.5%] left-[57%] -translate-x-1/2 -translate-y-1/2 bg-[#9FB1EF] rotate-[10deg] z-40" />
      <ProjectCard className="absolute top-[42%] left-[64.5%] -translate-x-1/2 -translate-y-1/2 bg-[#8C6196] rotate-[20deg] z-30" />
    </div>
  );
};

export default CardStack;
