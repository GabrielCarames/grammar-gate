import { CorrectionProps } from "@/interfaces"
import { Dispatch, SetStateAction } from "react"

export default function Aside({
  corrections,
  setValue,
  setCorrections
}: {
  corrections: CorrectionProps[]
  setValue: Dispatch<SetStateAction<string>>
  setCorrections: Dispatch<SetStateAction<CorrectionProps[]>>
}) {
  const handleCorrection = (correction: CorrectionProps) => {
    setValue((prev: string) => {
      const [before, after] = prev.split(correction.result[0])
      return `${before}${correction.result[1]}${after}`
    })
    setCorrections((prev: CorrectionProps[]) =>
      prev.filter((prevCorrection: CorrectionProps) => prevCorrection.id !== correction.id)
    )
  }

  return (
    <aside className="w-80 bg-gray-1 p-5">
      <h2 className="text-lg mb-10">General corrections</h2>
      {corrections?.length === 0 && (
        <p className="text-center">No corrections available. Well done!</p>
      )}
      <ul className="flex flex-col gap-10">
        {corrections?.map((correction: CorrectionProps) => (
          <li className="flex flex-col gap-2" key={correction.id}>
            <p>{correction.type}</p>
            <p>{correction.explanation}</p>
            <div className="flex gap-5">
              <p className="line-through text-red-500">{correction.result[0]}</p>
              <p className="text-green-500">{correction.result[1]}</p>
            </div>
            <button className="bg-orange-2" onClick={() => handleCorrection(correction)}>
              Correct
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
