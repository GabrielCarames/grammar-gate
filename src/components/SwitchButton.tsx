import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid"
import { type FC } from "react"

interface SwitchButtonProps {
  className?: string
  onClick: () => void
  disabled?: boolean
}

const SwitchButton: FC<SwitchButtonProps> = ({ className, onClick, disabled }) => {
  return (
    <button
      className={`w-max h-max rounded-full p-2 duration-150 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <ArrowsRightLeftIcon className="w-7 h-7 fill-black dark:fill-white" />
    </button>
  )
}

export default SwitchButton
