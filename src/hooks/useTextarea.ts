import { useEffect, useState } from "react"
import askToChatGPT from "@/utils/askToChatGPT"
import useAxios from "./useAxios"
import { createConsecutivePrompt, createFirstPrompt } from "@/utils/grammarCheckerPrompt"
import { ChatGPTMessageProps } from "@/interfaces"
import { useValueContext } from "@/contexts/ValueContext"
import { useCorrectionsContext } from "@/contexts/CorrectionsContext"
import { toast } from "react-toastify"

export const useTextarea = () => {
  const { setValue } = useValueContext()
  const { corrections, setCorrections } = useCorrectionsContext()
  const [textToCorrect, setTextToCorrect] = useState("")
  const [chatGPTMessages, setChatGPTMessages] = useState<ChatGPTMessageProps[]>([])
  const { makeRequest, data, error, loading } = useAxios()

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
          content: createConsecutivePrompt(message, corrections.textCorrected)
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
      const correction = JSON.parse(data.choices[0].message.content)
      setCorrections(correction)
    } catch {
      toast.error("Something went wrong, please try again later")
    }
  }, [data])

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextToCorrect(e.target.value)
    setValue(e.target.value)
  }

  return { onChange, loading }
}
