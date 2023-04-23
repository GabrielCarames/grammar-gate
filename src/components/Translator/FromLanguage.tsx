import { type FC } from "react"
import type { LanguageSectionProps } from "@/interfaces"
import { AUTO_LANGUAGE } from "@/enums.d"
import TextareaWrapper from "../TextareaWrapper"
import LanguageSelector from "./LanguageSelector"
import TextareaFooter from "../TextareaFooter"
import CopyButton from "../CopyButton"
import Textarea from "../Textarea"
import ExampleTextButton from "../ExampleTextButton"

const EXAMPLE_TEXT =
  "The sun was setting behind the mountains as the weary travelers finally reached the end of their long journey. They set up camp and cooked a simple meal before falling into a deep sleep under the starry sky."

const FromLanguage: FC<LanguageSectionProps> = ({
  fromLanguage,
  onSelectChange,
  languageSelectorValue,
  options,
  textareaValue,
  textareaOnchange,
  translation,
  setFromText
}) => {
  return (
    <TextareaWrapper>
      <LanguageSelector
        onSelectChange={onSelectChange}
        selectName="from-languages"
        value={languageSelectorValue}
        options={options}
        defaultOption={[AUTO_LANGUAGE]}
      />
      <Textarea value={textareaValue} onChange={textareaOnchange} name="fromLanguage" />
      {textareaValue.length <= 0 && (
        <ExampleTextButton
          exampleText={EXAMPLE_TEXT}
          className="top-[105px] text-orange-500 hover:text-orange-400 dark:text-orange-500 dark:hover:text-orange-600"
          additionalSetState={setFromText}
        />
      )}
      <TextareaFooter>
        {fromLanguage === AUTO_LANGUAGE && translation?.detectedLanguage && (
          <span className="text-text-gray dark:text-white">{`${translation?.detectedLanguage} (detected)`}</span>
        )}
        <CopyButton text={textareaValue} />
      </TextareaFooter>
    </TextareaWrapper>
  )
}

export default FromLanguage
