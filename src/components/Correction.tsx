import { CorrectionProps } from "@/interfaces"
import { ArrowRightIcon } from "@heroicons/react/24/solid"

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
      <div className="flex gap-5">
        <p className="line-through text-red-500">{correction?.result[0]}</p>
        <ArrowRightIcon className="h-6 w-6 text-pink-1" />
        <p className="text-green-500">{correction?.result[1]}</p>
      </div>
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
