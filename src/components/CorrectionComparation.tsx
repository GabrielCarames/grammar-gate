import { CorrectionProps } from "@/interfaces"
import { ArrowRightIcon } from "@heroicons/react/24/solid"

export default function CorrectionComparation({
  correction,
  containerClassName
}: {
  correction: CorrectionProps
  containerClassName?: string
}) {
  return (
    <div className={`m-max text-center flex gap-5 ${containerClassName}`}>
      <p className="line-through text-red-500">{correction?.result[0]}</p>
      <ArrowRightIcon className="h-6 w-6 text-pink-1" />
      <p className="text-green-500">{correction?.result[1]}</p>
    </div>
  )
}
