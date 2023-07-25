"use client";

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const firstCardVariants = {
  hover: { rotate: -20 },
};

const secondCardVariants = {
  hover: { y: -200 },
};

const thirdCardVariants = {
  hover: { rotate: 20 },
};

interface CardStackProps {
  firstCardChildren?: React.ReactNode;
  secondCardChildren?: React.ReactNode;
  thirdCardChildren?: React.ReactNode;
}

const CardStack: React.FC<CardStackProps> = ({
  firstCardChildren,
  secondCardChildren,
  thirdCardChildren,
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="relative cursor-pointer"
    >
      <ProjectCard
        projectCardVariants={firstCardVariants}
        className="absolute top-0 left-0 bg-[#FCD968] z-50"
      >
        {firstCardChildren}
      </ProjectCard>
      <ProjectCard
        projectCardVariants={secondCardVariants}
        className="absolute top-0 left-0 bg-[#9FB1EF] z-40"
      >
        {secondCardChildren}
      </ProjectCard>
      <ProjectCard
        projectCardVariants={thirdCardVariants}
        className="absolute top-0 left-0 bg-[#8C6196] z-30"
      >
        {thirdCardChildren}
      </ProjectCard>
    </motion.div>
  );
};

export default CardStack;
