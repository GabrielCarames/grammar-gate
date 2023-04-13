import { CorrectionProps } from "@/interfaces"
import CorrectionComparation from "./CorrectionComparation"
import { useHandleCorrection } from "@/hooks/useHandleCorrection"
import { type FC } from "react"

interface _CorrectionProps {
  correction: CorrectionProps
}

const Correction: FC<_CorrectionProps> = ({ correction }) => {
  const { handleCorrection } = useHandleCorrection()

  return (
    <li className="flex flex-col gap-2 border-[2px] border-white-2 dark:border-gray-2 p-2 rounded-md">
      <p className="capitalize font-bold">{correction.type}</p>
      <CorrectionComparation correction={correction} />
      <p className="text-sm lg:text-base text-text-gray dark:text-white first-letter:capitalize">
        {correction.explanation}
      </p>
      <button
        className="bg-pink-1 text-center py-1 rounded-md hover:bg-pink-2 duration-150 text-white black:text-black"
        onClick={() => handleCorrection(correction)}
      >
        Correct
      </button>
    </li>
  )
}

export default Correction
