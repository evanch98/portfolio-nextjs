"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TransitionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const TransitionWrapper = ({
  children,
  className,
}: TransitionWrapperProps) => {
  return (
    <>
      {children}
      <motion.div
        className={cn("slide-out bg-[--black]", className)}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};
