"use client";

import useTerminalHelp from "@/hooks/useTerminalHelp";
import Button from "./Button";
import { FiHelpCircle, FiX } from "react-icons/fi";
import useTerminal from "@/hooks/useTerminal";

const Nav = () => {
  const terminalHelp = useTerminalHelp();
  const terminal = useTerminal();
  return (
    <div className="w-full h-6 bg-gradient-to-b from-[#D9D9D9] to-[#9A9A9A] flex items-center justify-between px-2">
      <div className="flex gap-1">
        <Button
          className="bg-red-600 cursor-pointer flex flex-col items-center justify-center"
          children={<FiX className="w-2 h-2" />}
          onclick={terminal.onClose}
        />
        <Button className="bg-yellow-600" />
        <Button className="bg-green-600" />
      </div>
      <p className="text-sm">kyawthu</p>
      <FiHelpCircle onClick={terminalHelp.onOpen} />
    </div>
  );
};

export default Nav;
