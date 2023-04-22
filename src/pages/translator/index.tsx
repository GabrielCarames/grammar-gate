import { type FC } from "react"
import { AUTO_LANGUAGE, HeaderDescription, HeaderTitle, Languages } from "@/enums.d"
import FromLanguage from "@/components/Translator/FromLanguage"
import ToLanguage from "@/components/Translator/ToLanguage"
import TextareaSection from "@/components/TextareaSection"
import SwitchButton from "@/components/SwitchButton"
import Navbar from "@/components/Navbar"
import { useTranslator } from "@/hooks/useTranslator"

const Translator: FC = () => {
  const {
    fromLanguage,
    handleFromLanguage,
    toLanguage,
    handleToLanguage,
    onFromLanguageChange,
    translation,
    fromText,
    switchLanguages
  } = useTranslator()
  const LanguagesList = Object.values(Languages)
  const [en, es] = LanguagesList

  return (
    <div className="flex flex-wrap gap-y-10 md:flex-nowrap bg-white-1 dark:bg-black text-white w-full h-max min-h-screen pb-5 md:pt-0">
      <div id="modal-root"></div>
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="w-full h-max md:h-full flex justify-center items-center px-5 relative">
          <TextareaSection>
            <TextareaSection.Header
              title={HeaderTitle.TRANSLATOR}
              description={HeaderDescription.TRANSLATOR}
              className="bg-red-1"
            />
            <div className="flex gap-5">
              <FromLanguage
                onSelectChange={handleFromLanguage}
                languageSelectorValue={fromLanguage}
                languageSelectorDefaultValue={en}
                options={LanguagesList}
                textareaValue={fromText}
                textareaOnchange={onFromLanguageChange}
                translation={translation}
              />
              <SwitchButton
                className={fromLanguage === AUTO_LANGUAGE ? "opacity-50" : "hover:bg-gray-1"}
                onClick={switchLanguages}
                disabled={fromLanguage === AUTO_LANGUAGE}
              />
              <ToLanguage
                onSelectChange={handleToLanguage}
                languageSelectorValue={toLanguage}
                languageSelectorDefaultValue={es}
                options={LanguagesList}
                textareaValue={translation?.translatedText}
                translation={translation}
              />
            </div>
          </TextareaSection>
        </main>
      </div>
    </div>
  )
}

export default Translator
