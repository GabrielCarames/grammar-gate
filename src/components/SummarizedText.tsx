import TextareaSpan from "./TextareaSpan"
import { useSummaryContext } from "@/contexts/SummaryContext"
import useAxios from "@/hooks/useAxios"
import CopyIcon from "../../public/copy-icon.svg"
import { TrashIcon } from "@heroicons/react/24/solid"

const SummarizedText = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full flex flex-col border border-white-2 dark:border-gray-2 bg-white dark:bg-gray-1 rounded-md md:flex-1 shadow-lg">
      {children}
    </section>
  )
}

SummarizedText.SummarizedTextContent = function SummarizedTextContent() {
  const { summary } = useSummaryContext()
  const { loading } = useAxios()

  return (
    <div className="max-h-[250px] lg:max-h-[500px] h-max md:h-screen p-5 text-base lg:text-lg text-gray-1 dark:text-white">
      {loading ? (
        <div className="flex flex-col gap-2 w-full max-h-[240px] md:max-h-[490px] bg-white dark:bg-gray-1 h-max md:h-screen text-base lg:text-lg animate-pulse">
          <div className="w-full h-5 bg-white-2 dark:bg-gray-2 rounded-md"></div>
          <div className="w-[75%] h-5 bg-white-2 dark:bg-gray-2 rounded-md"></div>
          <div className="w-[25%] h-5 bg-white-2 dark:bg-gray-2 rounded-md"></div>
          <div className="w-[50%] h-5 bg-white-2 dark:bg-gray-2 rounded-md"></div>
        </div>
      ) : (
        <textarea
          className="w-full max-h-[250px] lg:max-h-[500px] bg-white dark:bg-gray-1 h-max md:h-screen outline-none resize-none text-base lg:text-lg text-gray-1 dark:text-white"
          name="text"
          cols={30}
          rows={10}
          defaultValue={summary}
          spellCheck={false}
          readOnly={summary.length <= 0}
          disabled={summary.length <= 0}
        />
      )}
    </div>
  )
}

SummarizedText.SummarizedTextFooter = function SummarizedTextFooter() {
  const { summary, setSummary } = useSummaryContext()

  return (
    <footer className="h-full flex items-center py-2 px-5 border-t-[.5px] border-white-2 dark:border-gray-2 text-gray-1 dark:text-white">
      <div className="w-full flex justify-between">
        <div className="border-[.5px] dark:border-gray-2 sm:border-none sm:p-0 p-1 px-1 rounded-md flex items-center">
          <TextareaSpan
            text="Words"
            data={summary.split(" ").length > 1 ? summary.split(" ").length : 0}
            className="!text-green-500 text-center"
          />
        </div>
        <div className="flex gap-2">
          <button
            className="rounded-full p-2 hover:bg-white-2 dark:hover:bg-pink-1 duration-150"
            onClick={() => navigator.clipboard.writeText(summary)}
          >
            <CopyIcon className="w-5 h-5 !fill-gray-1 dark:!fill-white" />
          </button>
          <button
            className="rounded-full p-2 hover:bg-white-2 dark:hover:bg-pink-1 duration-150"
            onClick={() => setSummary("")}
          >
            <TrashIcon className="w-5 h-5 text-white !fill-gray-1 dark:!fill-white" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export { SummarizedText }
