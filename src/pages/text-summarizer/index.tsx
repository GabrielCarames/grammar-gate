import Navbar from "@/components/Navbar"
import { SummarizedText } from "@/components/SummarizedText"
import TextSummarizerTextareaWrapper from "@/components/TextSummarizer/TextSummarizerTextareaWrapper"
import TextareaSection from "@/components/TextareaSection"
import Head from "next/head"

export default function TextSummarizer() {
  return (
    <>
      <Head>
        <title>Grammar Gate</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-wrap gap-y-10 md:flex-nowrap bg-white-1 dark:bg-black text-white w-full h-max min-h-screen pb-5 md:pt-0">
        <div id="modal-root"></div>
        <div className="flex flex-col w-full">
          <Navbar />
          <div className="w-full h-max md:h-full flex justify-center items-center px-5 relative">
            <TextareaSection>
              <TextareaSection.Header
                title="Text Summarizer"
                description="Summarize any text in a few seconds!"
              />
              <div className="w-full flex flex-col lg:flex-row justify-center gap-5">
                <TextSummarizerTextareaWrapper />
                <SummarizedText>
                  <SummarizedText.SummarizedTextContent />
                  <SummarizedText.SummarizedTextFooter />
                </SummarizedText>
              </div>
            </TextareaSection>
          </div>
        </div>
      </main>
    </>
  )
}
