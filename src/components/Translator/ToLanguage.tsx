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
  languageSelectorDefaultValue,
  options,
  textareaValue
}) => {
  return (
    <TextareaWrapper>
      <LanguageSelector
        onSelectChange={onSelectChange}
        selectName="to-languages"
        value={languageSelectorValue}
        defaultValue={languageSelectorDefaultValue}
        options={options}
      />
      <Textarea
        value={textareaValue}
        readOnly={true}
        name="toLanguage"
        placeholder="Translation"
        className={`${textareaValue ? "cursor-auto" : "cursor-default"}`}
      />
      <TextareaFooter>
        <CopyButton text={textareaValue} />
      </TextareaFooter>
    </TextareaWrapper>
  )
}

export default ToLanguage
