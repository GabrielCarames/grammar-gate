import { ChildrenProps } from "@/interfaces"
import { type FC } from "react"

const HighlightedText: FC<ChildrenProps> = ({ children }) => {
  return <span className="bg-pink-1 pointer-events-auto">{children}</span>
}

export default HighlightedText
