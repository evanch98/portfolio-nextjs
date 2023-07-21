"use client";

import useTerminalHelp from "@/hooks/useTerminalHelp";
import { FiHelpCircle, FiXCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const variants = {
  hidden: { x: 200, transition: { duration: 0.5 } },
  visible: { x: 0, transition: { duration: 0.5 } },
};

const TerminalHelp = () => {
  const terminalHelp = useTerminalHelp();
  return (
    <motion.div
      className="absolute top-0 right-0 bg-gradient-to-b from-[#D9D9D9] to-[#9A9A9A] h-full w-2/3 lg:w-1/2 p-2"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-1">
          <h1 className="font-bold">Help</h1>
          <FiHelpCircle />
        </div>
        <FiXCircle onClick={terminalHelp.onClose} />
      </div>
    </motion.div>
  );
};

export default TerminalHelp;
