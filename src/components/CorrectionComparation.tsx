import { CorrectionProps } from "@/interfaces"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import { type FC } from "react"

interface CorrectionComparationProps {
  correction: CorrectionProps
  containerClassName?: string
}

const CorrectionComparation: FC<CorrectionComparationProps> = ({
  correction,
  containerClassName
}) => {
  return (
    <div className={`m-max text-center flex gap-5 ${containerClassName}`}>
      <p className="line-through text-red-500">{correction?.result[0]}</p>
      <ArrowRightIcon className="h-6 min-w-[1.5rem] text-pink-1" />
      <p className="text-green-500">{correction?.result[1]}</p>
    </div>
  )
}

export default CorrectionComparation
