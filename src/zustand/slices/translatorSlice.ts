import { AUTO_LANGUAGE, Languages } from "@/enums.d"
import {
  FromLanguageProps,
  TranslatorProps,
  FromText,
  TranslatedText,
  TranslationProps
} from "@/interfaces.d"
import { StateCreator } from "zustand"

interface TranslatorMethodsProps {
  setFromLanguage: (language: FromLanguageProps) => void
  setToLanguage: (language: Languages) => void
  setFromText: (text: FromText) => void
  setTranslation: (text: TranslationProps) => void
  switchLanguages: any
}

export interface TranslatorSlice extends TranslatorProps, TranslatorMethodsProps {}

const initialState = {
  fromLanguage: Languages.ENGLISH,
  toLanguage: Languages.SPANISH,
  fromText: "",
  translation: {
    translatedText: "",
    detectedLanguage: null
  }
}

export const createTranslatorSlice: StateCreator<TranslatorSlice> = set => ({
  ...initialState,
  setFromLanguage: language => set({ fromLanguage: language }),
  setToLanguage: language => set({ toLanguage: language }),
  setFromText: text => set({ fromText: text }),
  setTranslation: translation => set({ translation: translation }),
  switchLanguages: () => {
    return set(state => {
      if (state.fromLanguage === AUTO_LANGUAGE) return state
      const newState: TranslatorProps = {
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage,
        fromText: state.translation.translatedText,
        translation: { ...state.translation, translatedText: state.fromText }
      }
      return newState
    })
  }
})
