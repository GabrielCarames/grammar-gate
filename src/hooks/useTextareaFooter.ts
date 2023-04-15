import { wordsCount } from "@/utils/wordsCount"
import { useBoundStore } from "@/zustand/useBoundStore"

export const useTextareaFooter = () => {
  const { textWithCorrections, clearCorrections, value, setValue } = useBoundStore()

  const getWordsCount = () => wordsCount(value)

  const correctionsCount = () =>
    textWithCorrections?.corrections?.length >= 1 ? textWithCorrections?.corrections?.length : "0"

  const fixEverything = () => {
    setValue(textWithCorrections.correctedText)
    clearCorrections()
  }

  return { textWithCorrections, getWordsCount, correctionsCount, fixEverything }
}
