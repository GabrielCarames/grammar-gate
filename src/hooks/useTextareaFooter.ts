import { useValueContext } from "@/contexts/ValueContext"
import { useBoundStore } from "@/zustand/useBoundStore"

export const useTextareaFooter = () => {
  const { value, setValue } = useValueContext()
  const { textWithCorrections, clearCorrections } = useBoundStore()

  const wordsCount = () => (value?.split(" ").length >= 1 ? value?.split(" ").length : "0")

  const correctionsCount = () =>
    textWithCorrections?.corrections?.length >= 1 ? textWithCorrections?.corrections?.length : "0"

  const fixEverything = () => {
    setValue(textWithCorrections.correctedText)
    clearCorrections()
  }

  return { textWithCorrections, wordsCount, correctionsCount, fixEverything }
}
