"use client";

import { twMerge } from "tailwind-merge";

interface ProjectCardProps {
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ className }) => {
  return (
    <div
      className={twMerge("w-[200px] h-[250px] bg-black rounded-2xl", className)}
    >
      Project Card
    </div>
  );
};

export default ProjectCard;
