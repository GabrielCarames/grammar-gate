import GrammarCheckerInfo from "@/utils/grammarCheckerInfo.json"
import GrammarCheckerTextareaWrapper from "@/components/GrammarChecker/GrammarCheckerTextareaWrapper"
import TextareaSection from "@/components/TextareaSection"
import Aside from "@/components/GrammarChecker/Aside"
import Navbar from "@/components/Navbar"
import { HeaderDescription, HeaderTitle } from "@/enums.d"
import { useCleaner } from "@/hooks/useCleaner"
import { type FC } from "react"

const GrammarChecker: FC = () => {
  useCleaner()

  return (
    <div className="flex flex-wrap gap-y-5 lg:flex-nowrap bg-white-1 dark:bg-black text-white w-full h-screen md:pt-0">
      <div id="modal-root"></div>
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="w-full h-max md:h-full flex justify-center items-center px-5 relative">
          <TextareaSection>
            <TextareaSection.Header
              title={HeaderTitle.GRAMMAR_CHECKER}
              description={HeaderDescription.GRAMMAR_CHECKER}
              className="bg-pink-1"
              content={GrammarCheckerInfo}
            />
            <GrammarCheckerTextareaWrapper />
          </TextareaSection>
        </main>
      </div>
      <Aside />
    </div>
  )
}

export default GrammarChecker
