"use client";

import { Element } from "react-scroll";
import CardStack from "../card-stack/CardStack";
import { motion } from "framer-motion";
import ProjectSection from "./ProjectSection";

const mainVariants = {
  initial: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
};

const RecentProjects = () => {
  return (
    <Element
      name="recent-projects"
      id="recent-projects"
      className="w-full h-screen flex flex-col justify-center items-center bg-white"
      aria-label="Recent Projects Section"
    >
      <motion.div
        className="outer-container"
        variants={mainVariants}
        initial="initial"
        whileInView="visible"
      >
        <h1 className="text-3xl lg:text-4xl text-[#8C6196] font-bold">
          Recent Projects
        </h1>
        <ProjectSection
          cardSide="left"
          title="Airbnb Clone"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui a incidunt repudiandae error iure, obcaecati minus ab iusto aliquam assumenda autem laudantium hic eius laborum! Voluptatibus hic distinctio fuga non."
          framework="Next JS"
        />
      </motion.div>
    </Element>
  );
};

export default RecentProjects;
