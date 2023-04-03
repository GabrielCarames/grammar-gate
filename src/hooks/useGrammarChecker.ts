import { useEffect, useState } from "react"
import askToChatGPT from "@/utils/askToChatGPT"
import useAxios from "./useAxios"
import { createConsecutivePrompt, createFirstPrompt } from "@/utils/grammarCheckerPrompt"
import { ChatGPTMessageProps } from "@/interfaces"
import { toast } from "react-toastify"
import { useBoundStore } from "@/zustand/useBoundStore"

export const useGrammarChecker = () => {
  const { textWithCorrections, addCorrection, value, setValue } = useBoundStore()
  const [textToCorrect, setTextToCorrect] = useState("")
  const [chatGPTMessages, setChatGPTMessages] = useState<ChatGPTMessageProps[]>([])
  const { makeRequest, data, loading } = useAxios()

  const addChatGPTMessage = (message: string) => {
    if (chatGPTMessages.length === 0)
      setChatGPTMessages([
        ...chatGPTMessages,
        { role: "user", content: createFirstPrompt(message) }
      ])
    else
      setChatGPTMessages([
        ...chatGPTMessages,
        {
          role: "user",
          content: createConsecutivePrompt(message, textWithCorrections.correctedText)
        }
      ])
  }

  useEffect(() => {
    if (chatGPTMessages.length === 0) return
    askToChatGPT(chatGPTMessages, makeRequest)
  }, [chatGPTMessages])

  useEffect(() => {
    if (textToCorrect?.length <= 1) return
    const timeout = setTimeout(() => {
      addChatGPTMessage(textToCorrect)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [textToCorrect])

  useEffect(() => {
    if (!data) return
    try {
      const textWithCorrections = JSON.parse(data.choices[0].message.content)
      addCorrection(textWithCorrections)
    } catch {
      toast.error("Something went wrong, please try again later")
    }
  }, [data])

  useEffect(() => {
    console.log(value)
  }, [value])

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextToCorrect(e.target.value)
    setValue(e.target.value)
  }

  return { onChange, loading }
}
