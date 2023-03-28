import Aside from "@/components/Aside"
// import TextareaSection from "@/components/GrammarChecker/TextareaSection"
import Navbar from "@/components/Navbar"
import TextareaSection from "@/components/TextareaSection"
import Head from "next/head"

export default function GrammarChecker() {
  return (
    <>
      <Head>
        <title>Grammar Gate</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-wrap gap-y-10 md:flex-nowrap bg-black text-white w-full h-screen md:pt-0">
        <div id="modal-root"></div>
        <div className="flex flex-col w-full">
          <Navbar />
          <div className="w-full h-max md:h-full flex justify-center items-center px-5 relative">
            <TextareaSection>
              <TextareaSection.Header
                title="Grammar Checker"
                description="Write your text and let us check your grammar!"
              />
              <TextareaSection.TextareaWrapper />
            </TextareaSection>
          </div>
        </div>
        <Aside />
      </main>
    </>
  )
}
