import { StateCreator } from "zustand"

export type SummarySlice = {
  summary: string
  setSummary: (newSummary: string) => void
  clearSummary: () => void
}

const initialState = { summary: "" }

export const createSummarySlice: StateCreator<SummarySlice> = set => ({
  ...initialState,
  setSummary: newSummary => set({ summary: newSummary }),
  clearSummary: () => set(initialState)
})
