export default function SummaryLength() {
  return (
    <div className="flex items-center gap-3 border-[.5px] dark:border-gray-2 sm:border-none sm:p-0 p-1 sm:px-3 rounded-md text-sm md:text-md text-gray-1 dark:text-white">
      <span className="font-semibold">Short</span>
      <div className="flex flex-col items-center gap-1">
        <span>Summary Length</span>
        <input
          className="cursor-pointer w-32 accent-yellow-1"
          type="range"
          name="summary-length"
          min="0"
          max="3"
          step="1"
        />
      </div>
      <span className="font-semibold">Long</span>
    </div>
  )
}
