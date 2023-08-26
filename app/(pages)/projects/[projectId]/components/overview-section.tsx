import NavLink from "@/components/common/nav-link";
import Link from "next/link";
import { FiGithub, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";

interface OverviewSectionProps {
  title: string;
  category: string;
  date: string;
  framework: string;
  gitHub: string;
  live: string;
}

const mainVariants = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      delayChildren: 0.3,
      staggerChildren: 0.1,
      type: "spring",
    },
  },
};

const childVariants = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: { duration: 1, type: "spring" },
  },
};

const OverviewSection: React.FC<OverviewSectionProps> = ({
  title,
  category,
  date,
  framework,
  gitHub,
  live,
}) => {
  return (
    <motion.div
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-5"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="w-full bg-[#EEEFF1] dark:bg-[#282B30] p-5 rounded-2xl flex flex-col gap-y-2 shadow-lg"
        variants={mainVariants}
      >
        <motion.h2
          className="md:text-lg lg:text-xl font-bold"
          variants={childVariants}
        >
          {title}
        </motion.h2>
        <motion.p variants={childVariants}>{framework}</motion.p>
        <motion.p
          className="opacity-70 text-sm md:text-base"
          variants={childVariants}
        >
          {category}
        </motion.p>
        <motion.p
          className="text-xs md:text-sm italic opacity-70"
          variants={childVariants}
        >
          Start Date: {date}
        </motion.p>
      </motion.div>
      <motion.div
        className="w-full bg-[#EEEFF1] dark:bg-[#282B30] p-5 rounded-2xl flex flex-col gap-y-2 shadow-lg"
        variants={mainVariants}
      >
        <motion.h2
          className="md:text-lg lg:text-xl font-bold"
          variants={childVariants}
        >
          Links
        </motion.h2>
        <motion.div className="w-full flex gap-x-4" variants={childVariants}>
          <Link
            href={gitHub}
            target="_blank"
            className="hover:opacity-70 transition-opacity"
          >
            <NavLink label="Code" icon={FiGithub} />
          </Link>
          <Link
            href={live}
            target="_blank"
            className="hover:opacity-70 transition-opacity"
          >
            <NavLink label="Live" icon={FiGlobe} />
          </Link>
        </motion.div>
        <motion.p
          className="text-xs md:text-sm opacity-70 italic"
          variants={childVariants}
        >
          Code is for the source code
        </motion.p>
        <motion.p
          className="text-xs md:text-sm opacity-70 italic"
          variants={childVariants}
        >
          Live is for the live demo website
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default OverviewSection;
