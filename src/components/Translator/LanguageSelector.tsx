import Select from "../Select"
import { type FC } from "react"
import { AUTO_LANGUAGE, Languages } from "@/enums.d"
import BottomArrow from "../../../public/bottom-arrow-icon.svg"
import IconWrapper from "../IconWrapper"

interface LanguageSelectorProps {
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  selectName: string
  options: Languages[]
  defaultOption?: Languages[] | typeof AUTO_LANGUAGE[]
  value: Languages | typeof AUTO_LANGUAGE
  defaultValue: Languages
  children?: React.ReactNode
}

const LanguageSelector: FC<LanguageSelectorProps> = ({
  selectName,
  value,
  defaultValue,
  options,
  defaultOption,
  onSelectChange,
  children
}) => {
  return (
    <div className="flex flex-1 flex-col gap-2 relative">
      <Select
        onChange={onSelectChange}
        value={value}
        name={selectName}
        defaultValue={defaultValue}
        className={`h-10 rounded-md appearance-none bg-no-repeat bg-right pl-5 py-2 pr-10 cursor-pointer rounded-b-none border-b dark:border-gray-2`}
      >
        {defaultOption && <Select.Option options={defaultOption} />}
        <Select.Option options={options} />
      </Select>
      <button className="pointer-events-none absolute top-0 right-0 pr-5 h-[40px] flex items-center">
        <IconWrapper icon={<BottomArrow className="w-7 h-7" />} className="!w-7" />
      </button>
      {children}
    </div>
  )
}

export default LanguageSelector
