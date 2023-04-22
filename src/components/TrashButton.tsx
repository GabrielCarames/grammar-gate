import { TrashIcon } from "@heroicons/react/24/solid"
import { type FC } from "react"

interface TrashButtonProps {
  deleteText: (text: string) => void
}

const TrashButton: FC<TrashButtonProps> = ({ deleteText }) => {
  return (
    <button
      className="rounded-full p-2 hover:bg-white-2 dark:hover:bg-pink-1 duration-150"
      onClick={() => deleteText("")}
    >
      <TrashIcon className="w-5 h-5 text-white !fill-text-gray dark:!fill-white" />
    </button>
  )
}

export default TrashButton
