import { type FC } from "react"
import type { LanguageSectionProps } from "@/interfaces"
import { AUTO_LANGUAGE } from "@/enums.d"
import TextareaWrapper from "../TextareaWrapper"
import LanguageSelector from "./LanguageSelector"
import TextareaFooter from "../TextareaFooter"
import CopyButton from "../CopyButton"
import Textarea from "../Textarea"

const FromLanguage: FC<LanguageSectionProps> = ({
  onSelectChange,
  languageSelectorValue,
  languageSelectorDefaultValue,
  options,
  textareaValue,
  textareaOnchange,
  translation
}) => {
  return (
    <TextareaWrapper>
      <LanguageSelector
        onSelectChange={onSelectChange}
        selectName="from-languages"
        value={languageSelectorValue}
        defaultValue={languageSelectorDefaultValue}
        options={options}
        defaultOption={[AUTO_LANGUAGE]}
      />
      <Textarea value={textareaValue} onChange={textareaOnchange} name="fromLanguage" />
      <TextareaFooter>
        {translation?.detectedLanguage && (
          <span>{`${translation?.detectedLanguage} (detected)`}</span>
        )}
        <CopyButton text={textareaValue} />
      </TextareaFooter>
    </TextareaWrapper>
  )
}

export default FromLanguage
