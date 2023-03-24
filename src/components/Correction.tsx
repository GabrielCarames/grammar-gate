import { CorrectionProps } from "@/interfaces"
import CorrectionComparation from "./CorrectionComparation"

export default function Correction({
  correction,
  handleCorrection
}: {
  correction: CorrectionProps
  handleCorrection: (correction: CorrectionProps) => void
}) {
  return (
    <li className="flex flex-col gap-2 border-[2px] border-gray-2 p-2 rounded-md">
      <p className="capitalize font-bold">{correction.type}</p>
      <CorrectionComparation correction={correction} />
      <p>{correction.explanation}</p>
      <button
        className="bg-pink-1 text-center py-1 rounded-md hover:bg-pink-2 duration-200"
        onClick={() => handleCorrection(correction)}
      >
        Correct
      </button>
    </li>
  )
}
