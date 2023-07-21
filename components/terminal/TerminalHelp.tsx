"use client";

import useTerminalHelp from "@/hooks/useTerminalHelp";
import { FiHelpCircle, FiXCircle } from "react-icons/fi";

const TerminalHelp = () => {
  const terminalHelp = useTerminalHelp();
  return (
    <div className="absolute top-0 right-0 bg-gradient-to-b from-[#D9D9D9] to-[#9A9A9A] h-full w-2/3 lg:w-1/2 p-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-1">
          <h1 className="font-bold">Help</h1>
          <FiHelpCircle />
        </div>
        <FiXCircle onClick={terminalHelp.onClose} />
      </div>
    </div>
  );
};

export default TerminalHelp;
