import { type FC } from "react"

interface HighlightedTextProps {
  children: React.ReactNode
}

const HighlightedText: FC<HighlightedTextProps> = ({ children }) => {
  return <span className="bg-pink-1 pointer-events-auto">{children}</span>
}

export default HighlightedText
