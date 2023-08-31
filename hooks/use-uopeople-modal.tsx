import { create } from "zustand";

interface useEduModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useEduModal = create<useEduModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
