import { AUTO_LANGUAGE, Languages } from "@/enums"
import { type FC } from "react"

interface SelectProps {
  onChange: React.ChangeEventHandler<HTMLSelectElement>
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
      defaultValue={defaultValue}
    >
      {children}
    </select>
  )
}

const Option: FC<OptionProps> = ({ options, className }) => {
  return (
    <>
      {options?.map(option => (
        <option value={option} className={`capitalize ${className}`} key={option}>
          {option}
        </option>
      ))}
    </>
  )
}

Select.Option = Option

export default Select
