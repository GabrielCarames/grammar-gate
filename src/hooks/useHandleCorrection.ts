import { CorrectionProps } from "@/interfaces"
import { useBoundStore } from "@/zustand/useBoundStore"

export const useHandleCorrection = () => {
  const { removeCorrection, value, setValue } = useBoundStore()

  const handleCorrection = (correction: CorrectionProps) => {
    const correctedText = value.replace(correction.result[0], correction.result[1])
    setValue(correctedText)
    removeCorrection(correction.id)
  }

  return { handleCorrection }
}
