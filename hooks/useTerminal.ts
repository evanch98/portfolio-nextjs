import { create } from "zustand";

interface TerminalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useTerminal = create<TerminalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useTerminal;
