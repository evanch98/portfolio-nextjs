"use client";

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const firstCardVariants = {
  initial: { x: "-50%", y: "-50%" },
  hover: { rotate: -20 },
};

const secondCardVariants = {
  initial: { x: "-50%", y: "-50%" },
  hover: { y: -300 },
};

const thirdCardVariants = {
  initial: { x: "-50%", y: "-50%" },
  hover: { rotate: 20 },
};

interface CardStackProps {
  firstCardChildren?: React.ReactNode;
  secondCardChildren?: React.ReactNode;
}

const CardStack: React.FC<CardStackProps> = ({
  firstCardChildren,
  secondCardChildren,
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="relative cursor-pointer w-[300px] h-[300px]"
    >
      <ProjectCard
        projectCardVariants={firstCardVariants}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FCD968] z-50"
      >
        {firstCardChildren}
      </ProjectCard>
      <ProjectCard
        projectCardVariants={secondCardVariants}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#9FB1EF] z-40"
      >
        {secondCardChildren}
      </ProjectCard>
      <ProjectCard
        projectCardVariants={thirdCardVariants}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#8C6196] z-30"
      />
    </motion.div>
  );
};

export default CardStack;
