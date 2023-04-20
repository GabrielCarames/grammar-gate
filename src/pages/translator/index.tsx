import TextareaSection from "@/components/TextareaSection"
import { useTranslator } from "@/hooks/useTranslator"
import Textarea from "@/components/Textarea"
import Navbar from "@/components/Navbar"
import Select from "@/components/Select"
import { AUTO_LANGUAGE, HeaderDescription, HeaderTitle, Languages } from "@/enums.d"
import { type FC } from "react"

const Translator: FC = () => {
  const {
    fromLanguage,
    handleFromLanguage,
    toLanguage,
    handleToLanguage,
    onFromLanguageChange,
    translatedText,
    fromText
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
            />
            <div className="flex gap-5">
              <div className="flex flex-col gap-2">
                <Select
                  onChange={e => handleFromLanguage(e.target.value as Languages)}
                  name="from-languages"
                  defaultValue={en}
                >
                  <Select.Option options={[AUTO_LANGUAGE]} />
                  <Select.Option options={LanguagesList} />
                </Select>
                <Textarea value={fromText} onChange={onFromLanguageChange} name="fromLanguage" />
              </div>
              <div className="flex flex-col gap-2">
                <Select
                  onChange={e => handleToLanguage(e.target.value as Languages)}
                  name="to-languages"
                  defaultValue={es}
                >
                  <Select.Option options={LanguagesList} />
                </Select>
                <Textarea value={translatedText} readOnly={true} name="toLanguage" />
              </div>
            </div>
          </TextareaSection>
        </main>
      </div>
    </div>
  )
}

export default Translator
