import Aside from "@/components/GrammarChecker/Aside"
import GrammarCheckerTextareaWrapper from "@/components/GrammarChecker/GrammarCheckerTextareaWrapper"
import Navbar from "@/components/Navbar"
import TextareaSection from "@/components/TextareaSection"

export default function GrammarChecker() {
  return (
    <main className="flex flex-wrap gap-y-5 md:flex-nowrap bg-white-1 dark:bg-black text-white w-full h-screen md:pt-0">
      <div id="modal-root"></div>
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="w-full h-max md:h-full flex justify-center items-center px-5 relative">
          <TextareaSection>
            <TextareaSection.Header
              title="Grammar Checker"
              description="Write your text and let us check your grammar!"
            />
            <GrammarCheckerTextareaWrapper />
          </TextareaSection>
        </div>
      </div>
      <Aside />
    </main>
  )
}
