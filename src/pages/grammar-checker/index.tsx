import GrammarCheckerTextareaWrapper from "@/components/GrammarChecker/GrammarCheckerTextareaWrapper"
import TextareaSection from "@/components/TextareaSection"
import Aside from "@/components/GrammarChecker/Aside"
import Navbar from "@/components/Navbar"
import { HeaderDescription, HeaderTitle } from "@/enums.d"

const GrammarChecker = (): JSX.Element => {
  return (
    <main className="flex flex-wrap gap-y-5 lg:flex-nowrap bg-white-1 dark:bg-black text-white w-full h-screen md:pt-0">
      <div id="modal-root"></div>
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="w-full h-max md:h-full flex justify-center items-center px-5 relative">
          <TextareaSection>
            <TextareaSection.Header
              title={HeaderTitle.GRAMMAR_CHECKER}
              description={HeaderDescription.GRAMMAR_CHECKER}
            />
            <GrammarCheckerTextareaWrapper />
          </TextareaSection>
        </div>
      </div>
      <Aside />
    </main>
  )
}

export default GrammarChecker
