import { FiGithub, FiGlobe, FiInfo } from "react-icons/fi";
import NavLink from "./nav-link";
import Link from "next/link";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  code?: string;
  live?: string;
  info?: string;
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

const Card: React.FC<CardProps> = ({
  title,
  description,
  code,
  live,
  info,
}) => {
  return (
    <motion.div
      className="w-full bg-[#282B30] p-5 rounded-2xl flex flex-col gap-y-2 shadow-lg"
      variants={mainVariants}
    >
      <motion.h3
        className="md:text-lg lg:text-xl font-bold"
        variants={childVariants}
      >
        {title}
      </motion.h3>
      <motion.p
        className="opacity-70 text-sm md:text-base"
        variants={childVariants}
      >
        {description}
      </motion.p>
      <motion.div
        className="flex gap-x-4 w-full items-center justify-center mt-auto"
        variants={childVariants}
      >
        {code && (
          <Link
            href={code}
            className="hover:opacity-70 transition-opacity"
            target="_blank"
          >
            <NavLink label="Code" icon={FiGithub} />
          </Link>
        )}
        {live && (
          <Link
            href={live}
            className="hover:opacity-70 transition-opacity"
            target="_blank"
          >
            <NavLink label="Live" icon={FiGlobe} />
          </Link>
        )}
        {info && (
          <Link
            href={info}
            className="hover:opacity-70 transition-opacity"
            target={info.startsWith("/") ? "_self" : "_blank"}
          >
            <NavLink label="Info" icon={FiInfo} />
          </Link>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Card;
