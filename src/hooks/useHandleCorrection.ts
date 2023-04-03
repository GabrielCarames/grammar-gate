import { CorrectionProps } from "@/interfaces"
import { useBoundStore } from "@/zustand/useBoundStore"

export const useHandleCorrection = () => {
  const { removeCorrection, value, setValue } = useBoundStore()

  const handleCorrection = (correction: CorrectionProps) => {
    const textToCorrect = correction.result[0]
    const availableCorrection = correction.result[1]
    const correctedText = value.replace(textToCorrect, availableCorrection)
    setValue(correctedText)
    removeCorrection(correction.id)
  }

  return { handleCorrection }
}
