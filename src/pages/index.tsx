import Aside from "@/components/Aside"
import { useTextarea } from "@/hooks/useTextarea"
import Head from "next/head"

export default function Home() {
  const { value, onChange, corrections } = useTextarea()

  return (
    <>
      <Head>
        <title>Grammar Checker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex bg-black text-white w-full h-screen">
        <div className="w-full h-full grid place-content-center px-5">
          <h1 className="text-3xl mb-10">
            Grammar Checker | Write your text and let us check your grammar!
          </h1>
          <textarea
            className="w-full min-h-[400px] h-max bg-gray-1 border border-gray-2 outline-none resize-none p-2 text-lg rounded-md"
            name="text"
            id=""
            cols={30}
            rows={10}
            value={value}
            onChange={onChange}
          ></textarea>
        </div>
        <Aside corrections={corrections} />
      </main>
    </>
  )
}
