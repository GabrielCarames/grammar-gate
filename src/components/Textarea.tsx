import React, { useEffect, useState } from "react"
import replace from "react-string-replace"
import { useCorrectionsContext } from "@/contexts/CorrectionsContext"

export default function Textarea({
  value,
  onChange
}: {
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}) {
  const [text, setText] = useState<any>()
  const { corrections } = useCorrectionsContext()

  const getHighlightedText = () => {
    const highlightedWords = corrections.corrections.map(correction => correction.result[0])
    const wordsToHighlight = highlightedWords.join("|")
    const regex = new RegExp(`\\b(${wordsToHighlight})\\b`, "gi")
    const highlightedText = replace(value, regex, (match, i) => (
      <span key={i} className="bg-pink-1">
        {match}
      </span>
    ))
    return highlightedText
  }

  useEffect(() => {
    const highlightedText = getHighlightedText()
    setText(highlightedText)
  }, [corrections, value])

  return (
    <div className="relative">
      <textarea
        className="w-full min-h-[500px] bg-gray-1 h-max outline-none resize-none p-5 text-lg"
        name="text"
        cols={30}
        rows={10}
        value={value}
        onChange={onChange}
        placeholder="Write your text here..."
        spellCheck={false}
      />
      <div
        className="absolute inset-0 w-full min-h-[500px]  h-max outline-none resize-none p-5 text-lg pointer-events-none"
        spellCheck={false}
      >
        {text}
      </div>
    </div>
  )
}
