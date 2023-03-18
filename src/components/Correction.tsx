import { CorrectionProps } from "@/interfaces"

export default function Correction({
  correction,
  handleCorrection
}: {
  correction: CorrectionProps
  handleCorrection: (correction: CorrectionProps) => void
}) {
  return (
    <li className="flex flex-col gap-2">
      <p>{correction.type}</p>
      <p>{correction.explanation}</p>
      <div className="flex gap-5">
        <p className="line-through text-red-500">{correction?.result[0]}</p>
        <p className="text-green-500">{correction?.result[1]}</p>
      </div>
      <button className="bg-orange-2" onClick={() => handleCorrection(correction)}>
        Correct
      </button>
    </li>
  )
}
