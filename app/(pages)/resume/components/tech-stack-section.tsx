"use client";

import { motion } from "framer-motion";

const TechStackSection = () => {
  const techs = [
    {
      title: "Languages",
      tech: ["TypeScript", "JavaScript"],
    },
    {
      title: "Libraries & Frameworks",
      tech: ["React", "Next JS", "Three JS", "Tailwind CSS", "Zustand"],
    },
    {
      title: "ORM & Databases",
      tech: ["Prisma", "MongoDB", "Supabase", "Planet Scale", "Cloudinary"],
    },
    {
      title: "Authentication",
      tech: ["NextAuth", "Clerk Auth"],
    },
    {
      title: "Others",
      tech: ["Stripe", "Figma"],
    },
  ];

  return (
    <motion.div
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
    >
      {techs.map((tech) => (
        <div
          key={tech.title}
          className="w-full bg-[#282B30] p-5 rounded-2xl flex flex-col gap-y-2 shadow-lg"
        >
          <h1 className="md:text-lg lg:text-xl font-bold">{tech.title}</h1>
          <ul className="list-inside list-disc opacity-70">
            {tech.tech.map((list) => (
              <li key={list}>{list}</li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
};

export default TechStackSection;
