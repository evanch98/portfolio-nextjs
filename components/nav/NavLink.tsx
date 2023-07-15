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
    </Link>
  );
};

export default NavLink;
