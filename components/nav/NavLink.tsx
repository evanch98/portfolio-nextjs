"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  name: string;
  isActive: boolean;
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

const NavLink: React.FC<NavLinkProps> = ({ href, name, isActive }) => {
  return (
    <Link href={href} className="flex flex-col items-center justify-center">
      {isActive && (
        <motion.div
          className="w-2 h-2 rounded-full bg-[#8C6196]"
          variants={circleVariants}
          initial="hidden"
          animate="visible"
        ></motion.div>
      )}
      <p>{name}</p>
      <div className="w-full">
        <svg
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height={10}
          preserveAspectRatio="xMinyMin"
        >
          <path
            strokeWidth={5}
            d="M0 0 L100 -10"
            stroke="#3F3A27"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </Link>
  );
};

export default NavLink;
