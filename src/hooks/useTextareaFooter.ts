import { wordsCount } from "@/utils/wordsCount"
import { useBoundStore } from "@/zustand/useBoundStore"

export const useTextareaFooter = () => {
  const { corrections, clearCorrections, value, setValue } = useBoundStore()

  const getWordsCount = () => wordsCount(value)

  const correctionsCount = () =>
    corrections?.correctionsList?.length >= 1 ? corrections?.correctionsList?.length : "0"

  const fixEverything = () => {
    setValue(corrections.correctedText)
    clearCorrections()
  }

  return { corrections, getWordsCount, correctionsCount, fixEverything }
}
