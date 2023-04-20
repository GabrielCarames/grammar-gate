import { AUTO_LANGUAGE, Languages } from "@/enums"
import { useBoundStore } from "@/zustand/useBoundStore"
import { type FC } from "react"

interface SelectProps {
  onChange: React.ChangeEventHandler<HTMLSelectElement>
  value: Languages | typeof AUTO_LANGUAGE
  defaultValue?: string
  children: React.ReactNode
  className?: string
  name: string
  id?: string
}

interface OptionProps {
  options: Languages[] | typeof AUTO_LANGUAGE[]
  className?: string
}

const Select: FC<SelectProps> & { Option: FC<OptionProps> } = ({
  onChange,
  value,
  defaultValue,
  children,
  className,
  name,
  id
}) => {
  return (
    <select
      name={name}
      id={id}
      className={`${className}`}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
    >
      {children}
    </select>
  )
}

const Option: FC<OptionProps> = ({ options, className }) => {
  const { fromLanguage, toLanguage } = useBoundStore()
  return (
    <>
      {options?.map(option => (
        <option
          value={option}
          className={`capitalize ${className}`}
          key={option}
          disabled={fromLanguage === option || toLanguage === option}
        >
          {option}
        </option>
      ))}
    </>
  )
}

Select.Option = Option

export default Select
