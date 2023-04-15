import Span from "../Span"
import useAxios from "@/hooks/useAxios"
import CopyIcon from "../../../public/copy-icon.svg"
import { TrashIcon } from "@heroicons/react/24/solid"
import { useBoundStore } from "@/zustand/useBoundStore"
import { type FC } from "react"
import { type ChildrenProps } from "@/interfaces"
import { wordsCount } from "@/utils/wordsCount"
import SkeletonText from "../SkeletonText"

const SummarizedText: FC<ChildrenProps> & {
  SummarizedTextContent: FC
  SummarizedTextFooter: FC
} = ({ children }) => {
  return (
    <section className="w-full flex flex-col border border-white-2 dark:border-gray-2 bg-white dark:bg-gray-1 rounded-md md:flex-1 shadow-lg">
      {children}
    </section>
  )
}

const SummarizedTextContent: FC = () => {
  const { summary } = useBoundStore()
  const { loading } = useAxios()

  return (
    <div className="max-h-[250px] lg:max-h-[500px] h-max md:h-screen p-5 text-base lg:text-lg text-text-gray dark:text-white">
      {loading ? (
        <SkeletonText />
      ) : (
        <textarea
          className="w-full max-h-[250px] lg:max-h-[500px] bg-white dark:bg-gray-1 h-max md:h-screen outline-none resize-none text-base lg:text-lg text-text-gray dark:text-white"
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

const SummarizedTextFooter: FC = () => {
  const { summary, setSummary } = useBoundStore()

  return (
    <footer className="h-full flex items-center py-2 px-5 border-t-[.5px] border-white-2 dark:border-gray-2 text-text-gray dark:text-white">
      <div className="w-full flex justify-between">
        <div className="border-[.5px] dark:border-gray-2 sm:border-none sm:p-0 p-1 px-1 rounded-md flex items-center">
          <Span text="Words" data={wordsCount(summary)} className="!text-green-500 text-center" />
        </div>
        <div className="flex gap-2">
          <button
            className="rounded-full p-2 hover:bg-white-2 dark:hover:bg-pink-1 duration-150"
            onClick={() => navigator.clipboard.writeText(summary)}
          >
            <CopyIcon className="w-5 h-5 !fill-text-gray dark:!fill-white" />
          </button>
          <button
            className="rounded-full p-2 hover:bg-white-2 dark:hover:bg-pink-1 duration-150"
            onClick={() => setSummary("")}
          >
            <TrashIcon className="w-5 h-5 text-white !fill-text-gray dark:!fill-white" />
          </button>
        </div>
      </div>
    </footer>
  )
}

SummarizedText.SummarizedTextContent = SummarizedTextContent
SummarizedText.SummarizedTextFooter = SummarizedTextFooter

export { SummarizedText }
