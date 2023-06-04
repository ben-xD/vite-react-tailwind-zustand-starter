import { StateCreator } from "zustand";
import { Mutators, StoreState } from "./store";

export interface CountSlice {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
}

export const createCountSlice: StateCreator<
  StoreState,
  Mutators,
  [],
  CountSlice
> = (set) => ({
  count: 0,
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  decrementCount: () => set((state) => ({ count: state.count - 1 })),
});
