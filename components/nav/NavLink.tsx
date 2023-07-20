"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  name: string;
  isActive: boolean;
  className?: string;
  onClick?: () => void;
}

const circleVariants = {
  hidden: {
    y: "-50vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: "120",
    },
  },
};

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const NavLink: React.FC<NavLinkProps> = ({
  href,
  name,
  isActive,
  className,
  onClick,
}) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center"
      onClick={onClick}
    >
      {isActive && (
        <motion.div
          className="w-2 h-2 rounded-full bg-[#8C6196]"
          variants={circleVariants}
          initial="hidden"
          animate="visible"
        ></motion.div>
      )}
      <motion.p
        className={className}
        whileHover={{
          scale: 1.2,
          type: "linear",
          transition: {
            duration: 0.3,
            ease: "easeIn",
          },
        }}
      >
        {name}
      </motion.p>
      <div className="w-full">
        <motion.svg
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height={10}
          preserveAspectRatio="xMinyMin"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            strokeWidth={5}
            d="M0 0 L100 -10"
            stroke="#3F3A27"
            strokeLinecap="round"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.svg>
      </div>
    </Link>
  );
};

export default NavLink;
