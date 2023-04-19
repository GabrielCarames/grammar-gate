import { useTextareaFooter } from "@/hooks/useTextareaFooter"
import Button from "../Button"
import Span from "../Span"
import { type FC } from "react"

interface GrammarCheckerTextareaFooterProps {
  loading: boolean
}

const GrammarCheckerTextareaFooter: FC<GrammarCheckerTextareaFooterProps> = ({ loading }) => {
  const { corrections, getWordsCount, correctionsCount, fixEverything } = useTextareaFooter()

  return (
    <div className="w-full h-12 flex justify-between items-center px-5 text-sm md:text-base text-text-gray dark:text-white">
      <Span text="Words" data={getWordsCount()} />
      <Button
        disabled={corrections?.correctionsList?.length <= 0}
        onClick={fixEverything}
        loading={loading}
        text="Fix everything"
        type="button"
        className={`${
          corrections?.correctionsList?.length >= 1
            ? "!bg-pink-1 hover:!bg-pink-2 !text-white"
            : "!bg-gray-500 text-gray-600"
        }
        ${
          corrections?.correctionsList?.length <= 0 && loading
            ? "!bg-pink-1"
            : "!bg-gray-500 text-gray-600"
        }`}
      />
      <Span text="Mistakes" data={correctionsCount()} className="!text-red-500 text-center" />
    </div>
  )
}

export default GrammarCheckerTextareaFooter
