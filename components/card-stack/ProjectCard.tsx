"use client";

import { twMerge } from "tailwind-merge";
import { Variants, motion } from "framer-motion";

interface ProjectCardProps {
  className?: string;
  projectCardVariants?: Variants;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  className,
  projectCardVariants,
}) => {
  return (
    <motion.div
      className={twMerge(
        "w-[200px] h-[250px] bg-black rounded-2xl project-card-shadow",
        className
      )}
      variants={projectCardVariants}
    >
      Project Card
    </motion.div>
  );
};

export default ProjectCard;
