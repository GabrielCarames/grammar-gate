import { useTextareaFooter } from "@/hooks/useTextareaFooter"
import Button from "./Button"
import TextareaSpan from "./TextareaSpan"

export default function TextareaFooter({ loading }: { loading: boolean }) {
  const { corrections, wordsCount, correctionsCount, fixEverything } = useTextareaFooter()

  const availableData = corrections.corrections.length >= 1

  return (
    <div className="w-full h-12 flex justify-between items-center px-5 text-sm md:text-base">
      <TextareaSpan text="Words" data={wordsCount()} />
      <Button
        availableData={availableData}
        onClick={fixEverything}
        loading={loading}
        text="Fix everything"
      />
      <TextareaSpan
        text="Mistakes"
        data={correctionsCount()}
        className="!text-red-500 text-center"
      />
    </div>
  )
}
