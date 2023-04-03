import { create } from "zustand"
import { CorrectionsSlice, createCorrectionsSlice } from "./slices/correctionsSlice"
import { ValueSlice, createValueSlice } from "./slices/valueSlice"
import { SummarySlice, createSummarySlice } from "./slices/summarySlice"

export const useBoundStore = create<CorrectionsSlice & ValueSlice & SummarySlice>()((...a) => ({
  ...createCorrectionsSlice(...a),
  ...createValueSlice(...a),
  ...createSummarySlice(...a)
}))
