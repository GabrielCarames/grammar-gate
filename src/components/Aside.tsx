import { useCorrectionsContext } from "@/contexts/CorrectionsContext"
import { useValueContext } from "@/contexts/ValueContext"
import { CorrectionProps, CorrectionsProps } from "@/interfaces"
import Correction from "./Correction"

export default function Aside() {
  const { value, setValue } = useValueContext()
  const { corrections, setCorrections } = useCorrectionsContext()

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

  return (
    <aside className="w-full md:w-96 md:max-h-screen bg-gray-1 p-5">
      <h2 className="text-lg mb-10">General corrections</h2>
      {corrections.corrections?.length === 0 && (
        <p className="text-center">No corrections available. Well done!</p>
      )}
      <ul className="h-[calc(100%-100px)] flex flex-col gap-5 overflow-y-auto">
        {corrections?.corrections?.map((correction: CorrectionProps) => (
          <Correction
            correction={correction}
            handleCorrection={handleCorrection}
            key={correction.id}
          />
        ))}
      </ul>
    </aside>
  )
}
