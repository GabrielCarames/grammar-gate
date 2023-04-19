import { AddCorrectionProps, CorrectionProps, CorrectionsProps } from "@/interfaces"
import { StateCreator } from "zustand"

export type CorrectionsSlice = {
  corrections: CorrectionsProps
  removeCorrection: (correctionId: CorrectionProps["id"]) => void
  addCorrection: AddCorrectionProps
  clearCorrections: () => void
}

const initialState = {
  corrections: {
    correctionsList: [],
    correctedText: ""
  }
}

export const createCorrectionsSlice: StateCreator<CorrectionsSlice> = set => ({
  ...initialState,
  removeCorrection: correctionId =>
    set(state => {
      const filteredCorrections = state.corrections.correctionsList.filter(
        (prevCorrection: CorrectionProps) => prevCorrection.id !== correctionId
      )
      return {
        corrections: { ...state.corrections, correctionsList: filteredCorrections }
      }
    }),
  addCorrection: newCorrections => set({ corrections: newCorrections }),
  clearCorrections: () => set(initialState)
})
