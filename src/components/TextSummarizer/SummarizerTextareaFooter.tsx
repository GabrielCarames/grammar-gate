import Button from "../Button"
import TextareaSpan from "../TextareaSpan"

export default function SummarizerTextareaFooter({
  value,
  loading
}: {
  value: string
  loading: boolean
}) {
  return (
    <footer className="w-full h-max flex flex-wrap flex-col sm:flex-row justify-center gap-y-2 sm:justify-between items-center px-0 sm:px-5 py-2 border-t-[.5px] border-gray-2">
      <div className="h-max flex xs:justify-center gap-1 xs:gap-5 md:justify-start">
        <div className="border-[.5px] border-gray-2 sm:border-none sm:p-0 p-1 px-1 rounded-md flex items-center">
          <TextareaSpan text="Words" data={32} />
        </div>
        <div className="flex items-center gap-3 border-[.5px] border-gray-2 sm:border-none sm:p-0 p-1 sm:px-3 rounded-md text-sm md:text-md">
          <span className="font-semibold">Short</span>
          <div className="flex flex-col items-center gap-1">
            <span>Summary Length</span>
            <input
              className="cursor-pointer w-32"
              type="range"
              name="summary-length"
              min="0"
              max="3"
              step="1"
            />
          </div>
          <span className="font-semibold">Long</span>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <Button
          loading={loading}
          disabled={loading || value.length <= 0}
          text="Summarize"
          type="submit"
          className={`
          ${value.length >= 1 && loading ? "!bg-pink-1" : ""}
          ${value.length <= 0 ? "!bg-gray-500 text-gray-600" : ""}`}
        />
      </div>
    </footer>
  )
}
