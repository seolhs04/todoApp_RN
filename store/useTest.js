import create from "zustand";

export const useTest = create((set) => ({
  number: 0,
  increaseNumber: () => set((state) => ({ number: state.number + 1 })),
  decreaseNumber: () => set((state) => ({ number: state.number - 1 })),
  resetNumber: () => set({ number: 0 }),
}));
