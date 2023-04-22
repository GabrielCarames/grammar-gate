import LanguageSelector from "@/components/Translator/LanguageSelector"
import TextareaSection from "@/components/TextareaSection"
import { useTranslator } from "@/hooks/useTranslator"
import Textarea from "@/components/Textarea"
import Navbar from "@/components/Navbar"
import { AUTO_LANGUAGE, HeaderDescription, HeaderTitle, Languages } from "@/enums.d"
import { type FC } from "react"
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid"

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
          <span>{`${fromLanguage} ${translation.detectedLanguage} hola`}</span>
          <TextareaSection>
            <TextareaSection.Header
              title={HeaderTitle.TRANSLATOR}
              description={HeaderDescription.TRANSLATOR}
              className="bg-red-1"
            />
            <div className="flex gap-5">
              <LanguageSelector
                onSelectChange={handleFromLanguage}
                selectName="from-languages"
                value={fromLanguage}
                defaultValue={en}
                options={LanguagesList}
                defaultOption={[AUTO_LANGUAGE]}
              >
                <Textarea value={fromText} onChange={onFromLanguageChange} name="fromLanguage" />
              </LanguageSelector>
              <button
                className={`w-max h-max  rounded-full p-2 duration-150 ${
                  fromLanguage === AUTO_LANGUAGE ? "opacity-50" : "hover:bg-gray-1"
                }`}
                onClick={switchLanguages}
                disabled={fromLanguage === AUTO_LANGUAGE}
              >
                <ArrowsRightLeftIcon className="w-7 h-7" />
              </button>
              <LanguageSelector
                onSelectChange={handleToLanguage}
                selectName="to-languages"
                value={toLanguage}
                defaultValue={es}
                options={LanguagesList}
              >
                <Textarea
                  value={translation.translatedText}
                  readOnly={true}
                  name="toLanguage"
                  placeholder="Translation"
                />
              </LanguageSelector>
            </div>
          </TextareaSection>
        </main>
      </div>
    </div>
  )
}

export default Translator
