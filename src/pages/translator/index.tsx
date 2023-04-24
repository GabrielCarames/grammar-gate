import { type FC } from "react"
import { AUTO_LANGUAGE, HeaderDescription, HeaderTitle, Languages } from "@/enums.d"
import TranslatorInfo from "@/utils/translatorInfo.json"
import FromLanguage from "@/components/Translator/FromLanguage"
import ToLanguage from "@/components/Translator/ToLanguage"
import TextareaSection from "@/components/TextareaSection"
import SwitchButton from "@/components/SwitchButton"
import Navbar from "@/components/Navbar"
import { useTranslator } from "@/hooks/useTranslator"
import { useCleaner } from "@/hooks/useCleaner"

const Translator: FC = () => {
  useCleaner()
  const {
    fromLanguage,
    handleFromLanguage,
    toLanguage,
    handleToLanguage,
    onFromLanguageChange,
    translation,
    fromText,
    setFromText,
    switchLanguages,
    loading
  } = useTranslator()
  const LanguagesList = Object.values(Languages)

  return (
    <div className="flex flex-wrap gap-y-10 md:flex-nowrap bg-white-1 dark:bg-black text-white w-full h-max min-h-screen pb-5 md:pt-0">
      <div id="modal-root"></div>
      <div className="flex flex-col w-full">
        <Navbar />
        <main
          className="w-full h-max md:h-full flex justify-center items-center px-5 relative"
          id="translator"
        >
          <TextareaSection>
            <TextareaSection.Header
              title={HeaderTitle.TRANSLATOR}
              description={HeaderDescription.TRANSLATOR}
              className="bg-orange-500"
              content={TranslatorInfo}
            />
            <div className="flex flex-wrap justify-center gap-5">
              <FromLanguage
                fromLanguage={fromLanguage}
                onSelectChange={handleFromLanguage}
                languageSelectorValue={fromLanguage}
                options={LanguagesList}
                textareaValue={fromText}
                textareaOnchange={onFromLanguageChange}
                translation={translation}
                setFromText={setFromText}
              />
              <aside className="w-min flex flex-col items-center gap-40">
                <SwitchButton
                  className={
                    fromLanguage === AUTO_LANGUAGE
                      ? "opacity-50"
                      : "hover:bg-gray-300 dark:hover:bg-gray-600"
                  }
                  onClick={switchLanguages}
                  disabled={fromLanguage === AUTO_LANGUAGE}
                />
              </aside>
              <ToLanguage
                onSelectChange={handleToLanguage}
                languageSelectorValue={toLanguage}
                options={LanguagesList}
                textareaValue={translation?.translatedText}
                translation={translation}
                loading={loading}
              />
            </div>
          </TextareaSection>
        </main>
      </div>
    </div>
  )
}

export default Translator
