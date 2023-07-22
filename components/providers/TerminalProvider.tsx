"use client";

import useTerminal from "@/hooks/useTerminal";
import Terminal from "../terminal/Terminal";
import { AnimatePresence } from "framer-motion";

const TerminalProvider = () => {
  const terminal = useTerminal();
  return <AnimatePresence>{terminal.isOpen && <Terminal />}</AnimatePresence>;
};

export default TerminalProvider;
