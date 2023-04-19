import Navbar from "@/components/Navbar"
import { Languages } from "@/enums"
import { useTranslator } from "@/hooks/useTranslator"
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

  return (
    <div className="flex flex-wrap gap-y-10 md:flex-nowrap bg-white-1 dark:bg-black text-white w-full h-max min-h-screen pb-5 md:pt-0">
      <div id="modal-root"></div>
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="w-full h-max md:h-full flex justify-center items-center px-5 relative">
          <section className="flex gap-5">
            <div className="flex flex-col gap-2">
              <select
                name="from-languages"
                id=""
                onChange={e => handleFromLanguage(e.target.value as Languages)}
              >
                <option value={fromLanguage} className="capitalize">
                  {fromLanguage}
                </option>
              </select>
              <textarea
                name="fromLanguage"
                className="w-80 h-40 outline-none"
                value={fromText}
                onChange={onFromLanguageChange}
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <select
                name="from-languages"
                id=""
                onChange={e => handleToLanguage(e.target.value as Languages)}
              >
                <option value={toLanguage} className="capitalize">
                  {toLanguage}
                </option>
              </select>
              <textarea
                name="fromLanguage"
                className="w-80 h-40 outline-none"
                value={translatedText}
                readOnly
              ></textarea>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Translator
