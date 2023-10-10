import { create } from "zustand";
import { BearStateInterface } from "./interface";


const useBearState = create<BearStateInterface>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useBearState;