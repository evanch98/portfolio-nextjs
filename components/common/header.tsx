"use client";

import { motion } from "framer-motion";

interface HeaderProps {
  title: string;
  description: string;
}

export const Header = ({ title, description }: HeaderProps) => {
  return (
    <motion.div
      className="w-[790px] flex flex-col items-center justify-center text-center gap-y-[24px]"
      initial="hidden"
      animate="visible"
    >
      <h1 className="heading-1 text-[--black] uppercase">{title}</h1>
      <p className="paragraph text-[--black] opacity-75">{description}</p>
    </motion.div>
  );
};
