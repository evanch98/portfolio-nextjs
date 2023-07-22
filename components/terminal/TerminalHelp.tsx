"use client";

import useTerminalHelp from "@/hooks/useTerminalHelp";
import { FiHelpCircle, FiXCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const variants = {
  hidden: { x: 1000, transition: { duration: 0.5 } },
  visible: { x: 0, transition: { duration: 0.5 } },
};

const TerminalHelp = () => {
  const terminalHelp = useTerminalHelp();
  return (
    <motion.div
      className="absolute top-0 right-0 bg-gradient-to-b from-[#D9D9D9] to-[#9A9A9A] h-full w-2/3 lg:w-1/2 p-2 text-black"
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
      {/* TODO: Divider */}
      <div className="flex flex-col text-sm">
        <h2 className="font-semibold text-lg">Commands</h2>
        <p>ls: List all the available pages</p>
        <p>cd {"<page name>"}: Go to the page</p>
        <p>clear: Clear</p>
      </div>
      <p className="text-xs text-center text-red-600 absolute bottom-1">
        This is not an actual terminal. Only the above commands will work.
      </p>
    </motion.div>
  );
};

export default TerminalHelp;
