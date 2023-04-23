import Head from "next/head"
import logo from "../../public/short-logo.png"
import { type FC } from "react"
import { ChildrenProps } from "@/interfaces"

const HeadWrapper: FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Grammar Gate | Your All-In-One Solution for Writing</title>
        <meta
          name="description"
          content="GrammarGate is a platform that provides a suite of grammar tools, including a grammar checker and text summarizer. Improve your writing with our tools, designed to catch grammar and spelling errors, and generate concise summaries of lengthy text. Try our grammar tools today and take your writing to the next level."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={logo.src} />
      </Head>
      {children}
    </>
  )
}

export default HeadWrapper
