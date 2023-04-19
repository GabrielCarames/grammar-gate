import { create } from "zustand"
import { CorrectionsSlice, createCorrectionsSlice } from "./slices/correctionsSlice"
import { SummarySlice, createSummarySlice } from "./slices/summarySlice"
import { LoadingSlice, createLoadingSlice } from "./slices/loadingSlice"
import { ValueSlice, createValueSlice } from "./slices/valueSlice"
import { TranslatorSlice, createTranslatorSlice } from "./slices/translatorSlice"

export const useBoundStore = create<
  CorrectionsSlice & ValueSlice & SummarySlice & LoadingSlice & TranslatorSlice
>()((...a) => ({
  ...createCorrectionsSlice(...a),
  ...createValueSlice(...a),
  ...createSummarySlice(...a),
  ...createLoadingSlice(...a),
  ...createTranslatorSlice(...a)
}))
