import { useValueContext } from "@/contexts/ValueContext"
import { CorrectionsProps } from "@/interfaces"

export default function TextareaFooter({
  value,
  corrections,
  setCorrections
}: {
  value: string
  corrections: CorrectionsProps
  setCorrections: (corrections: CorrectionsProps) => void
}) {
  const { setValue } = useValueContext()
  const wordsCount = () => (value?.split(" ").length >= 1 ? value?.split(" ").length : "0")
  const correctionsCount = () =>
    corrections?.corrections?.length >= 1 ? corrections?.corrections?.length : "0"
  const fixEverything = () => {
    setValue(corrections.textCorrected)
    setCorrections({ corrections: [], textCorrected: "" })
  }

  return (
    <div className="w-full h-12 flex justify-between items-center px-5">
      <p>
        <span className="text-yellow-1">{wordsCount()}</span> words
      </p>
      <button
        className="bg-pink-1 p-4 py-1 rounded-full font-bold hover:bg-pink-2 duration-200"
        onClick={fixEverything}
      >
        Fix everything
      </button>
      <p>
        <span className="text-red-500">{correctionsCount()}</span> mistakes
      </p>
    </div>
  )
}
