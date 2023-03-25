import { useCorrectionsContext } from "@/contexts/CorrectionsContext"
import { useValueContext } from "@/contexts/ValueContext"
import { CorrectionProps, CorrectionsProps } from "@/interfaces"

export const useHandleCorrection = () => {
  const { value, setValue } = useValueContext()
  const { setCorrections } = useCorrectionsContext()

  const handleCorrection = (correction: CorrectionProps) => {
    const correctedText = value.replace(correction.result[0], correction.result[1])
    setValue(correctedText)
    setCorrections((prev: CorrectionsProps) => {
      return {
        corrections: prev.corrections.filter(
          (prevCorrection: CorrectionProps) => prevCorrection.id !== correction.id
        ),
        textCorrected: prev.textCorrected
      }
    })
  }

  return {handleCorrection}
}