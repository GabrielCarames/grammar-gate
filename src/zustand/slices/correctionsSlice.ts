import { CorrectionProps, TextWithCorrectionsProps } from "@/interfaces"
import { StateCreator } from "zustand"

export type CorrectionsSlice = {
  textWithCorrections: TextWithCorrectionsProps
  removeCorrection: (correctionId: CorrectionProps["id"]) => void
  addCorrection: (newTextWithCorrections: TextWithCorrectionsProps) => void
  clearCorrections: () => void
}

const initialState = {
  textWithCorrections: {
    corrections: [],
    correctedText: ""
  }
}

export const createCorrectionsSlice: StateCreator<CorrectionsSlice> = set => ({
  ...initialState,
  removeCorrection: correctionId =>
    set(state => {
      const filteredCorrections = state.textWithCorrections.corrections.filter(
        (prevCorrection: CorrectionProps) => prevCorrection.id !== correctionId
      )
      return {
        textWithCorrections: { ...state.textWithCorrections, corrections: filteredCorrections }
      }
    }),
  addCorrection: newTextWithCorrections => set({ textWithCorrections: newTextWithCorrections }),
  clearCorrections: () => set(initialState)
})
