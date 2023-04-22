import { type FC } from "react"

interface TextareaFooterProps {
  children: React.ReactNode
  className?: string
}

const TextareaFooter: FC<TextareaFooterProps> = ({ children, className }) => {
  return (
    <footer
      className={`w-full min-h-[61px] h-max flex flex-wrap flex-col sm:flex-row justify-center gap-y-2 sm:justify-between items-center px-0 sm:px-5 py-2 border-t-[.5px] border-white-2 dark:border-gray-2 ${className}`}
    >
      {children}
    </footer>
  )
}

export default TextareaFooter
