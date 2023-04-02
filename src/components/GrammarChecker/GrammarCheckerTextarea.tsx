import React from "react"
import { useCorrectionsContext } from "@/contexts/CorrectionsContext"
import { useValueContext } from "@/contexts/ValueContext"
import HighlightedText from "../HighlightedText"
import { CorrectionsProps } from "@/interfaces"
const Highlighter = require("react-highlight-words")

const getSearchWords = (corrections: CorrectionsProps) => {
  return [
    `\\b(${corrections.corrections.map(correction => correction.result[0]).join("|")})\\b`,
    "gi"
  ]
}

export default function GrammarCheckerTextarea({
  onChange
}: {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}) {
  const { corrections } = useCorrectionsContext()
  const { value } = useValueContext()

  return (
    <div className="relative w-full px-5">
      <div
        className="text-transparent caret-white absolute inset-0 bg-transparent w-full max-h-[250px] md:max-h-[500px] h-max md:h-screen outline-none resize-none p-5 text-base lg:text-lg text-gray-1 dark:text-white"
        spellCheck={false}
      >
        <Highlighter
          searchWords={getSearchWords(corrections)}
          autoEscape={false}
          textToHighlight={value}
          highlightTag={HighlightedText}
          caseSensitive={true}
        />
      </div>
      <textarea
        className="relative w-full max-h-[250px] md:max-h-[500px] bg-gray-1 h-max md:h-screen outline-none resize-none pt-5 text-base lg:text-lg bg-transparent text-gray-1 dark:text-white"
        name="text"
        cols={30}
        rows={10}
        value={value}
        onChange={onChange}
        placeholder="Write your text here..."
        spellCheck={false}
      />
    </div>
  )
}
