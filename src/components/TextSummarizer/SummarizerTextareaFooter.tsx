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
    <div className="w-full h-max flex flex-col-reverse md:flex-row justify-center gap-y-2 md:justify-between items-center px-5 py-2">
      <div className="w-full h-max flex justify-center md:justify-start gap-5">
        <TextareaSpan text="Words" data={32} />
      </div>
      <div className="flex gap-2">
        <div className="flex gap-1">
          <span>Short</span>
          <input
            className="cursor-pointer w-32"
            type="range"
            name="summary-length"
            min="0"
            max="3"
            step="1"
          />
          <span>Long</span>
        </div>
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
    </div>
  )
}
