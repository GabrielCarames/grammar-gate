import { useCorrectionsContext } from "@/contexts/CorrectionsContext"
import { useValueContext } from "@/contexts/ValueContext"

export default function TextareaFooter() {
  const { value, setValue } = useValueContext()
  const { corrections, setCorrections } = useCorrectionsContext()

  const wordsCount = () => (value?.split(" ").length >= 1 ? value?.split(" ").length : "0")
  const correctionsCount = () =>
    corrections?.corrections?.length >= 1 ? corrections?.corrections?.length : "0"
  const fixEverything = () => {
    setValue(corrections.textCorrected)
    setCorrections({ ...corrections, corrections: [] })
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
