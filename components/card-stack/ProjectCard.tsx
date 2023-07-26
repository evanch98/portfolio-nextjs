"use client";

import { twMerge } from "tailwind-merge";
import { Variants, motion } from "framer-motion";

interface ProjectCardProps {
  className?: string;
  projectCardVariants?: Variants;
  children?: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  className,
  projectCardVariants,
  children,
}) => {
  return (
    <motion.div
      className={twMerge(
        "w-[200px] h-[250px] bg-black rounded-2xl project-card-shadow overflow-hidden",
        className
      )}
      variants={projectCardVariants}
    >
      {children ? children : "ProjectCard"}
    </motion.div>
  );
};

export default ProjectCard;
