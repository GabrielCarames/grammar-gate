import { useValueContext } from "@/contexts/ValueContext"
import { CorrectionProps } from "@/interfaces"
import { useBoundStore } from "@/zustand/useBoundStore"

export const useHandleCorrection = () => {
  const { value, setValue } = useValueContext()
  const { removeCorrection } = useBoundStore()

  const handleCorrection = (correction: CorrectionProps) => {
    const correctedText = value.replace(correction.result[0], correction.result[1])
    setValue(correctedText)
    removeCorrection(correction.id)
  }

  return { handleCorrection }
}
