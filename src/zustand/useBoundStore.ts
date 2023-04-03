import { create } from "zustand"
import { CorrectionsSlice, createCorrectionsSlice } from "./slices/correctionsSlice"
import { ValueSlice, createValueSlice } from "./slices/valueSlice"

export const useBoundStore = create<CorrectionsSlice & ValueSlice>()((...a) => ({
  ...createCorrectionsSlice(...a),
  ...createValueSlice(...a)
}))
