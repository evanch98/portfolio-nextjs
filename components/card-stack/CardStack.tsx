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

const CardStack = () => {
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
      />
      <ProjectCard
        projectCardVariants={secondCardVariants}
        className="absolute top-0 left-2 bg-[#9FB1EF] z-40"
      />
      <ProjectCard
        projectCardVariants={thirdCardVariants}
        className="absolute top-0 left-4 bg-[#8C6196] z-30"
      />
    </motion.div>
  );
};

export default CardStack;
