import { useCorrectionsContext } from "@/contexts/CorrectionsContext"
import { useValueContext } from "@/contexts/ValueContext"

export const useTextareaFooter = () => {
  const { value, setValue } = useValueContext()
  const { corrections, setCorrections } = useCorrectionsContext()

  const wordsCount = () => (value?.split(" ").length >= 1 ? value?.split(" ").length : "0")

  const correctionsCount = () =>
    corrections?.corrections?.length >= 1 ? corrections?.corrections?.length : "0"

  const fixEverything = () => {
    setValue(corrections.textCorrected)
    setCorrections({ ...corrections, corrections: [] })
  }

  return { corrections, wordsCount, correctionsCount, fixEverything }
}
