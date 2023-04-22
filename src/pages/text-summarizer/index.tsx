import TextSummarizerTextareaWrapper from "@/components/TextSummarizer/TextSummarizerTextareaWrapper"
import { SummarizedText } from "@/components/TextSummarizer/SummarizedText"
import TextareaSection from "@/components/TextareaSection"
import Navbar from "@/components/Navbar"
import { HeaderDescription, HeaderTitle } from "@/enums.d"
import { useCleaner } from "@/hooks/useCleaner"
import { type FC } from "react"

const TextSummarizer: FC = () => {
  useCleaner()

  return (
    <div className="flex flex-wrap gap-y-10 md:flex-nowrap bg-white-1 dark:bg-black text-white w-full h-max min-h-screen pb-5 md:pt-0">
      <div id="modal-root"></div>
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="w-full h-max md:h-full flex justify-center items-center px-5 relative">
          <TextareaSection>
            <TextareaSection.Header
              title={HeaderTitle.TEXT_SUMMARIZER}
              description={HeaderDescription.TEXT_SUMMARIZER}
              className="!bg-green-1"
            />
            <div className="w-full flex flex-col lg:flex-row justify-center gap-5">
              <TextSummarizerTextareaWrapper />
              <SummarizedText>
                <SummarizedText.SummarizedTextContent />
                <SummarizedText.SummarizedTextFooter />
              </SummarizedText>
            </div>
          </TextareaSection>
        </main>
      </div>
    </div>
  )
}

export default TextSummarizer
