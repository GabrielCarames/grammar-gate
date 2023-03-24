import Aside from "@/components/Aside"
import TextareaSection from "@/components/TextareaSection"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Grammar Checker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-wrap gap-y-10 md:flex-nowrap bg-black text-white w-full h-screen pt-10 md:pt-0">
        <div id="modal-root"></div>
        <div className="w-full h-max md:h-full flex justify-center items-center px-5 relative">
          <TextareaSection />
        </div>
        <Aside />
      </main>
    </>
  )
}
