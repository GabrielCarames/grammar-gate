import { type FC } from "react"
import type { LanguageSectionProps } from "@/interfaces"
import TextareaWrapper from "../TextareaWrapper"
import LanguageSelector from "./LanguageSelector"
import TextareaFooter from "../TextareaFooter"
import CopyButton from "../CopyButton"
import Textarea from "../Textarea"

const ToLanguage: FC<Omit<LanguageSectionProps, "textareaOnchange">> = ({
  onSelectChange,
  languageSelectorValue,
  options,
  textareaValue,
  loading
}) => {
  return (
    <TextareaWrapper>
      <LanguageSelector
        onSelectChange={onSelectChange}
        selectName="to-languages"
        value={languageSelectorValue}
        options={options}
      />
      <Textarea
        value={textareaValue}
        readOnly={true}
        name="toLanguage"
        autofocus={false}
        className={`!bg-gray-200 dark:!bg-[#242432] rounded-t-none rounded-b-none ${
          textareaValue ? "cursor-auto" : "cursor-default"
        }`}
        placeholder={loading ? "Translating..." : "Translation"}
      />
      <TextareaFooter className="!bg-gray-200 dark:!bg-[#242432] border-gray-300">
        <CopyButton text={textareaValue} />
      </TextareaFooter>
    </TextareaWrapper>
  )
}

export default ToLanguage
