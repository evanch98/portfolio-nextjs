"use client";

import { hVariant, pVariant } from "@/lib/utils";
import { motion } from "framer-motion";

interface HeaderProps {
  title: string;
  description: string;
}

export const Header = ({ title, description }: HeaderProps) => {
  return (
    <motion.div
      className="md:w-[790px] w-full flex flex-col items-center justify-center text-center md:gap-y-[24px] gap-y-[8px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h1
        variants={hVariant}
        className="heading-1 text-[--black] uppercase"
      >
        {title}
      </motion.h1>
      <motion.p
        variants={pVariant}
        className="paragraph text-[--black] opacity-75"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};
