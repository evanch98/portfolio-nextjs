"use client";

import { Element } from "react-scroll";
import { motion } from "framer-motion";
import ProjectSection from "./ProjectSection";
import projectsProvider from "@/utils/projectsProvider";

const mainVariants = {
  initial: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
};

const RecentProjects = () => {
  return (
    <Element
      name="recent-projects"
      id="recent-projects"
      className="w-full h-full flex flex-col justify-center items-center bg-white pt-[100px]"
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
        <div className="flex flex-col w-full gap-5">
          {projectsProvider.map((project, index) => (
            <ProjectSection
              key={index}
              cardSide={index % 2 === 0 ? "left" : "right"}
              title={project.title}
              description={project.description[0]}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              pageUrl={project.pageUrl}
              framework={project.framework}
              gitHubLink={project.gitHubLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </motion.div>
    </Element>
  );
};

export default RecentProjects;
