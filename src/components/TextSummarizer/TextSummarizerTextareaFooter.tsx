import { type FC } from "react"
import SummaryLength from "../SummaryLength"
import Button from "../Button"
import Span from "../Span"
import { wordsCount } from "@/utils/wordsCount"

interface TextSummarizerTextareaFooterProps {
  value: string
  loading: boolean
}

const TextSummarizerTextareaFooter: FC<TextSummarizerTextareaFooterProps> = ({
  value,
  loading
}) => {
  return (
    <footer className="w-full h-max flex flex-wrap flex-col sm:flex-row justify-center gap-y-2 sm:justify-between items-center px-0 sm:px-5 py-2 border-t-[.5px] border-white-2 dark:border-gray-2">
      <div className="h-max flex xs:justify-center gap-1 xs:gap-5 md:justify-start">
        <div className="border-[.5px] dark:border-gray-2 sm:border-none sm:p-0 p-1 px-1 rounded-md flex items-center text-text-gray dark:text-white">
          <Span text="Words" data={wordsCount(value)} />
        </div>
        <SummaryLength />
      </div>
      <div className="flex justify-center gap-2">
        <Button
          loading={loading}
          disabled={loading || value.length <= 0}
          text="Summarize"
          type="submit"
          className={`
          ${value.length >= 1 && loading ? "!bg-pink-1" : ""}
          ${value.length <= 0 ? "!bg-gray-500 text-white-2 dark:text-gray-600" : ""}`}
        />
      </div>
    </footer>
  )
}

export default TextSummarizerTextareaFooter
