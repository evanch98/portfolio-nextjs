"use client";

import useTerminal from "@/hooks/useTerminal";
import Terminal from "../terminal/Terminal";

const TerminalProvider = () => {
  const terminal = useTerminal();
  return terminal.isOpen && <Terminal />;
};

export default TerminalProvider;
