import { type FC } from "react"

interface TextareaWrapperProps {
  children: React.ReactNode
  className?: string
}

const TextareaWrapper: FC<TextareaWrapperProps> = ({ children, className }) => {
  return (
    <section
      className={`md:flex-1 w-full border dark:border-gray-2 bg-white dark:bg-gray-1 rounded-md shadow-lg relative ${className}`}
    >
      {children}
    </section>
  )
}

export default TextareaWrapper
