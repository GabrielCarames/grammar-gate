import { create } from "zustand"
import { CorrectionsSlice, createCorrectionsSlice } from "./slices/correctionsSlice"

export const useBoundStore = create<CorrectionsSlice>()((...a) => ({
  ...createCorrectionsSlice(...a)
}))
