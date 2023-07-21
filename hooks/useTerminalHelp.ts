import { create } from "zustand";

interface TerminalHelpStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useTerminalHelp = create<TerminalHelpStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useTerminalHelp;
