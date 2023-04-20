import { type FC } from "react"

interface TextareaProps {
  cols?: number
  rows?: number
  spellCheck?: boolean
  value: string
  placeholder?: string
  autofocus?: boolean
  name: string
  className?: string
}

interface TextareaEditableProps extends TextareaProps {
  readOnly?: false
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

interface TextareaReadOnlyProps extends TextareaProps {
  readOnly: true
  onChange?: never
}

type TextareaFinalProps = TextareaEditableProps | TextareaReadOnlyProps

const Textarea: FC<TextareaFinalProps> = ({
  cols = 30,
  rows = 10,
  spellCheck = false,
  value,
  placeholder = "Write your text here...",
  autofocus = true,
  readOnly = false,
  name,
  className,
  onChange
}) => {
  return (
    <textarea
      className={`w-full max-h-[250px] lg:max-h-[500px] bg-white dark:bg-gray-1 text-text-gray dark:text-white h-max md:h-screen rounded-md outline-none resize-none p-5 text-base lg:text-lg ${className}`}
      name={name}
      cols={cols}
      rows={rows}
      spellCheck={spellCheck}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoFocus={autofocus}
      readOnly={readOnly}
    />
  )
}

export default Textarea
