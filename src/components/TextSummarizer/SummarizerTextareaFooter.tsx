import Button from "../Button"
import SummaryLength from "../SummaryLength"
import TextareaSpan from "../TextareaSpan"

export default function SummarizerTextareaFooter({
  value,
  loading
}: {
  value: string
  loading: boolean
}) {
  return (
    <footer className="w-full h-max flex flex-wrap flex-col sm:flex-row justify-center gap-y-2 sm:justify-between items-center px-0 sm:px-5 py-2 border-t-[.5px] border-white-2 dark:border-gray-2">
      <div className="h-max flex xs:justify-center gap-1 xs:gap-5 md:justify-start">
        <div className="border-[.5px] dark:border-gray-2 sm:border-none sm:p-0 p-1 px-1 rounded-md flex items-center text-gray-1 dark:text-white">
          <TextareaSpan text="Words" data={32} />
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
