"use client";

import { AnimatePresence, motion } from "framer-motion";

interface AnimatePresenceProviderProps {
  children: React.ReactNode;
}

export const AnimatePresenceProvider = ({
  children,
}: AnimatePresenceProviderProps) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};
