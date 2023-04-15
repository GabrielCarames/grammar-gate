import { useBoundStore } from "@/zustand/useBoundStore"
import { DocumentTextIcon } from "@heroicons/react/24/solid"
import { type FC } from "react"

interface ExampleTextButtonProps {
  exampleText: string
  additionalSetState?: (text: string) => void
}

const ExampleTextButton: FC<ExampleTextButtonProps> = ({ exampleText, additionalSetState }) => {
  const { setValue } = useBoundStore()

  return (
    <button
      className="w-max h-5 absolute left-5 top-16 z-[1000] text-yellow-1 hover:text-yellow-400 text-sm font-semibold flex gap-1"
      onClick={() => {
        setValue(exampleText)
        additionalSetState && additionalSetState(exampleText)
      }}
    >
      <DocumentTextIcon className="w-5" />
      Try with an example
    </button>
  )
}

export default ExampleTextButton
