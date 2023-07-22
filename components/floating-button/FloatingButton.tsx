"use client";

import useTerminal from "@/hooks/useTerminal";
import { FiTool } from "react-icons/fi";

const FloatingButton = () => {
  const terminal = useTerminal();
  return (
    <button
      className="fixed bottom-5 right-5 w-12 h-12 rounded-full btn-secondary flex items-center justify-center floating-button-shadow hover:animate-bounce"
      onClick={terminal.onOpen}
    >
      <FiTool className="w-5 h-auto" />
    </button>
  );
};

export default FloatingButton;
