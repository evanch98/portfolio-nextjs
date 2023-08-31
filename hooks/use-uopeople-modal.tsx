import { create } from "zustand";

interface useUoPeopleModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useUoPeopleModal = create<useUoPeopleModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
