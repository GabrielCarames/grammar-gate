import Select from "../Select"
import { type FC } from "react"
import { AUTO_LANGUAGE, Languages } from "@/enums.d"

interface LanguageSelectorProps {
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  selectName: string
  options: Languages[]
  defaultOption?: Languages[] | typeof AUTO_LANGUAGE[]
  defaultValue: Languages
  children: React.ReactNode
}

const LanguageSelector: FC<LanguageSelectorProps> = ({
  selectName,
  defaultValue,
  options,
  defaultOption,
  onSelectChange,
  children
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Select onChange={onSelectChange} name={selectName} defaultValue={defaultValue}>
        {defaultOption && <Select.Option options={defaultOption} />}
        <Select.Option options={options} />
      </Select>
      {children}
    </div>
  )
}

export default LanguageSelector
