"use client";

import { useUoPeopleModal } from "@/hooks/use-uopeople-modal";
import { motion } from "framer-motion";

const EduSection = () => {
  const uoPeopleModal = useUoPeopleModal();

  const educations = [
    {
      degree: "Bachelor of Science in Computer Science",
      date: "Sep, 2021 - Mar, 2025 (Expected)",
      university: "University of the People, Pasadena, CA",
      gpa: "3.96",
      onclick: () => {
        uoPeopleModal.onOpen();
      },
    },
  ];

  return (
    <motion.div
      className="w-full grid grid-cols-1 gap-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      {educations.map((education) => (
        <div
          key={education.degree}
          className="w-full bg-[#EEEFF1] dark:bg-[#282B30] p-5 rounded-2xl flex flex-col gap-y-2 shadow-lg"
        >
          <div className="flex flex-col gap-y-2 md:flex-row md:justify-between">
            <h1 className="font-bold text-sm md:text-lg">{education.degree}</h1>
            <p className="text-sm md:text-base opacity-70">{education.date}</p>
          </div>
          <p className="italic opacity-70 text-sm md:text-base">
            {education.university}
          </p>
          <p className="opacity-70 text-sm md:text-base">
            CGPA: {education.gpa}
          </p>
          <p
            onClick={education.onclick}
            className="italic text-sm underline opacity-70 hover:cursor-pointer hover:opacity-50 transition"
          >
            Learn More
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default EduSection;
