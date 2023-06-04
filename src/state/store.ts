import { create } from "zustand";
// import { devtools, persist } from "zustand/middleware";
import { CountSlice, createCountSlice } from "./counterSlice";
import { AgeSlice, createAgeSlice } from "./ageSlice";
import { devtools, persist } from "zustand/middleware";

export type StoreState = CountSlice & AgeSlice;
export type Mutators = [
  ["zustand/persist", unknown],
  ["zustand/devtools", never]
];

export const useBoundStore = create<StoreState>()(
  persist(
    devtools(
      (...a) => {
        return {
          ...createAgeSlice(...a),
          ...createCountSlice(...a),
        };
      },
      { name: "persist" }
    ),
    { name: "storage" }
  )
);
