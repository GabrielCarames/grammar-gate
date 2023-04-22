import { useBoundStore } from "@/zustand/useBoundStore"
import { DocumentTextIcon } from "@heroicons/react/24/solid"
import { type FC } from "react"

interface ExampleTextButtonProps {
  exampleText: string
  additionalSetState?: (text: string) => void
  className?: string
}

const ExampleTextButton: FC<ExampleTextButtonProps> = ({
  exampleText,
  additionalSetState,
  className
}) => {
  const { setValue } = useBoundStore()

  return (
    <button
      className={`w-max h-5 absolute left-4 top-16 z-[1000] text-orange-500 hover:text-orange-400 dark:text-yellow-1 dark:hover:text-yellow-400 text-sm font-semibold flex gap-1 ${className}`}
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
