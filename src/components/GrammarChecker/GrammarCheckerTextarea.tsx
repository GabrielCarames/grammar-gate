import { type FC, type ChangeEvent } from "react"
import HighlightedText from "../HighlightedText"
import { useBoundStore } from "@/zustand/useBoundStore"
import Highlighter from "react-highlight-words"
import ExampleTextButton from "../ExampleTextButton"
import { CorrectionsProps } from "@/interfaces"

interface GrammarCheckerTextareaProps {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  setTextToCorrect: (text: string) => void
}

const getSearchWords = (corrections: CorrectionsProps) => {
  return [
    `\\b(${corrections?.correctionsList.map(correction => correction.result[0]).join("|")})\\b`,
    "gi"
  ]
}

const EXAMPLE_TEXT =
  "Me and my friend goes to the park last weekend, we plays on the swings, seesaw, and slides, and we have so much fun together."

const GrammarCheckerTextarea: FC<GrammarCheckerTextareaProps> = ({
  onChange,
  setTextToCorrect
}) => {
  const { corrections, value } = useBoundStore()

  return (
    <div className="relative w-full px-5">
      <div
        className="!text-transparent caret-white absolute inset-0 bg-transparent w-full max-h-[250px] md:max-h-[500px] h-max md:h-screen outline-none resize-none p-5 text-base lg:text-lg"
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
      {value.length <= 0 && (
        <ExampleTextButton exampleText={EXAMPLE_TEXT} additionalSetState={setTextToCorrect} />
      )}
    </div>
  )
}

export default GrammarCheckerTextarea
