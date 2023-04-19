import { SetSummaryProps } from "@/interfaces"
import { StateCreator } from "zustand"

export type SummarySlice = {
  summary: string
  setSummary: SetSummaryProps
  clearSummary: () => void
}

const initialState = { summary: "" }

export const createSummarySlice: StateCreator<SummarySlice> = set => ({
  ...initialState,
  setSummary: (newSummary: string) => set({ summary: newSummary }),
  clearSummary: () => set(initialState)
})
