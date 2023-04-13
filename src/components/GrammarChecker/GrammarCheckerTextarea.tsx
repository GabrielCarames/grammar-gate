import { type FC, type ChangeEvent } from "react"
import HighlightedText from "../HighlightedText"
import { TextWithCorrectionsProps } from "@/interfaces"
import { useBoundStore } from "@/zustand/useBoundStore"
import Highlighter from "react-highlight-words"

interface GrammarCheckerTextareaProps {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const getSearchWords = (textWithCorrections: TextWithCorrectionsProps) => {
  return [
    `\\b(${textWithCorrections.corrections.map(correction => correction.result[0]).join("|")})\\b`,
    "gi"
  ]
}

const GrammarCheckerTextarea: FC<GrammarCheckerTextareaProps> = ({ onChange }) => {
  const { textWithCorrections, value } = useBoundStore()

  return (
    <div className="relative w-full px-5">
      <div
        className="!text-transparent caret-white absolute inset-0 bg-transparent w-full max-h-[250px] md:max-h-[500px] h-max md:h-screen outline-none resize-none p-5 text-base lg:text-lg"
        spellCheck={false}
      >
        <Highlighter
          searchWords={getSearchWords(textWithCorrections)}
          autoEscape={false}
          textToHighlight={value}
          highlightTag={HighlightedText}
          caseSensitive={true}
        />
      </div>
      <textarea
        className="relative w-full max-h-[250px] md:max-h-[500px] h-max md:h-screen outline-none resize-none pt-5 text-base lg:text-lg bg-transparent text-text-gray dark:text-white"
        name="text"
        cols={30}
        rows={10}
        value={value}
        onChange={onChange}
        placeholder="Write your text here..."
        spellCheck={false}
        autoFocus
      />
    </div>
  )
}

export default GrammarCheckerTextarea
