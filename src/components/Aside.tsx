import { useCorrectionsContext } from "@/contexts/CorrectionsContext"
import { CorrectionProps } from "@/interfaces"
import Correction from "./Correction"

export default function Aside() {
  const { corrections } = useCorrectionsContext()

  return (
    <aside className="w-full md:w-96 md:max-h-screen bg-gray-1 p-5">
      <h2 className="text-lg mb-10">General corrections</h2>
      {corrections.corrections?.length === 0 && (
        <p className="text-center">No corrections available. Well done!</p>
      )}
      <ul className="h-[calc(100%-100px)] flex flex-col gap-5 overflow-y-auto">
        {corrections?.corrections?.map((correction: CorrectionProps) => (
          <Correction
            correction={correction}
            key={correction.id}
          />
        ))}
      </ul>
    </aside>
  )
}
