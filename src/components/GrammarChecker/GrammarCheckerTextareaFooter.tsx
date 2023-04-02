import { useTextareaFooter } from "@/hooks/useTextareaFooter"
import Button from "../Button"
import Span from "../Span"

export default function GrammarCheckerTextareaFooter({ loading }: { loading: boolean }) {
  const { corrections, wordsCount, correctionsCount, fixEverything } = useTextareaFooter()

  return (
    <div className="w-full h-12 flex justify-between items-center px-5 text-sm md:text-base text-text-gray dark:text-white">
      <Span text="Words" data={wordsCount()} />
      <Button
        disabled={corrections.corrections.length <= 0}
        onClick={fixEverything}
        loading={loading}
        text="Fix everything"
        type="button"
        className={`${
          corrections.corrections.length >= 1
            ? "!bg-pink-1 hover:!bg-pink-2 !text-white"
            : "!bg-gray-500 text-gray-600"
        }
        ${
          corrections.corrections.length <= 0 && loading
            ? "!bg-pink-1"
            : "!bg-gray-500 text-gray-600"
        }`}
      />
      <Span text="Mistakes" data={correctionsCount()} className="!text-red-500 text-center" />
    </div>
  )
}
