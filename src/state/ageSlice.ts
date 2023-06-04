import { StateCreator } from "zustand";
import { Mutators, StoreState } from "./store";

export interface AgeSlice {
  age: number;
  incrementAge: () => void;
  decrementAge: () => void;
}

export const createAgeSlice: StateCreator<
  StoreState,
  Mutators,
  [],
  AgeSlice
> = (set) => ({
  age: 0,
  incrementAge: () => set((state) => ({ age: state.age + 1 })),
  decrementAge: () => set((state) => ({ age: state.age - 1 })),
});
