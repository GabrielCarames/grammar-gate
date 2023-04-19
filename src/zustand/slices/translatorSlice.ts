import { Languages } from "@/enums.d"
import { StateCreator } from "zustand"

export type TranslatorSlice = {
  fromLanguage: Languages
  toLanguage: Languages
  fromText: string
  translatedText: string
  setFromLanguage: (language: Languages) => void
  setToLanguage: (language: Languages) => void
  setFromText: (text: string) => void
  setTranslatedText: (text: string) => void
}

const initialState = {
  fromLanguage: Languages.ENGLISH,
  toLanguage: Languages.SPANISH,
  fromText: "",
  translatedText: ""
}

export const createTranslatorSlice: StateCreator<TranslatorSlice> = set => ({
  ...initialState,
  setFromLanguage: language => set({ fromLanguage: language }),
  setToLanguage: language => set({ toLanguage: language }),
  setFromText: text => set({ fromText: text }),
  setTranslatedText: text => set({ translatedText: text })
})
