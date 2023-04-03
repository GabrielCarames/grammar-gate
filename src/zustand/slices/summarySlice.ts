import { StateCreator } from "zustand"

export type SummarySlice = {
  summary: string
  setSummary: (newSummary: string) => void
  clearSummary: () => void
}

export const createSummarySlice: StateCreator<SummarySlice> = set => ({
  summary: "",
  setSummary: newSummary => set({ summary: newSummary }),
  clearSummary: () => set({ summary: "" })
})
