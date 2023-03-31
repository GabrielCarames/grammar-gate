import TextareaSpan from "./TextareaSpan"
import { useSummaryContext } from "@/contexts/SummaryContext"
import useAxios from "@/hooks/useAxios"

const SummarizedText = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full flex flex-col border border-gray-2 bg-gray-1 rounded-md md:flex-1">
      {children}
    </section>
  )
}

SummarizedText.SummarizedTextContent = function SummarizedTextContent() {
  const { summary } = useSummaryContext()
  const { loading } = useAxios()

  return (
    <div className="max-h-[250px] lg:max-h-[500px] h-max md:h-screen p-5 text-base lg:text-lg text-white">
      {loading ? (
        <div className="flex flex-col gap-2 w-full max-h-[240px] md:max-h-[490px] bg-gray-1 h-max md:h-screen text-base lg:text-lg animate-pulse">
          <div className="w-full h-5 bg-gray-2 rounded-md"></div>
          <div className="w-[75%] h-5 bg-gray-2 rounded-md"></div>
          <div className="w-[25%] h-5 bg-gray-2 rounded-md"></div>
          <div className="w-[50%] h-5 bg-gray-2 rounded-md"></div>
        </div>
      ) : (
        <textarea
          className="w-full max-h-[250px] lg:max-h-[500px] bg-gray-1 h-max md:h-screen outline-none resize-none text-base lg:text-lg"
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
  const { summary } = useSummaryContext()

  return (
    <footer className="h-full flex items-center py-2 px-5 border-t-[.5px] border-gray-2">
      <div className="border-[.5px] border-gray-2 sm:border-none sm:p-0 p-1 px-1 rounded-md flex items-center">
        <TextareaSpan
          text="Words"
          data={summary.split(" ").length > 1 ? summary.split(" ").length : 0}
          className="!text-green-500 text-center"
        />
      </div>
    </footer>
  )
}

export { SummarizedText }
