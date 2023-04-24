import { type FC } from "react"
import { NotificationSuccess } from "@/utils/toastNotifications"
import CopyIcon from "../../public/copy-icon.svg"

interface CopyButtonProps {
  text: string
}

const CopyButton: FC<CopyButtonProps> = ({ text }) => {
  return (
    <button
      className="rounded-full p-2 hover:bg-white-2 dark:hover:bg-pink-1 duration-150"
      onClick={() => {
        if (!text) return
        navigator.clipboard.writeText(text)
        NotificationSuccess("Text copied to clipboard")
      }}
      disabled={!text}
    >
      <CopyIcon className="w-5 h-5 !fill-text-gray dark:!fill-white" />
    </button>
  )
}

export default CopyButton
