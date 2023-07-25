"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface ProjectCardProps {
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ className }) => {
  return (
    <motion.div
      className={twMerge(
        "w-[200px] h-[250px] bg-black rounded-2xl project-card-shadow",
        className
      )}
    >
      Project Card
    </motion.div>
  );
};

export default ProjectCard;
