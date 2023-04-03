import { useEffect, useState } from "react"
import useAxios from "./useAxios"
import { ChatGPTMessageProps } from "@/interfaces"
import { toast } from "react-toastify"
import { createPrompt } from "@/utils/textSummarizerPrompt"
import askToChatGPT from "@/utils/askToChatGPT"
import { useSummaryContext } from "@/contexts/SummaryContext"

type RangeValuesProps = {
  [key: string]: string
}

const rangeValues: RangeValuesProps = {
  "0": "very short",
  "1": "short",
  "2": "medium",
  "3": "long"
}

export const useTextSummarizer = () => {
  const { summary, setSummary } = useSummaryContext()
  const [chatGPTMessages, setChatGPTMessages] = useState<ChatGPTMessageProps[]>([])
  const { makeRequest, data, loading } = useAxios()

  useEffect(() => {
    if (chatGPTMessages.length === 0) return
    askToChatGPT(chatGPTMessages, makeRequest)
  }, [chatGPTMessages])

  useEffect(() => {
    if (!data) return
    try {
      const summary = JSON.parse(data.choices[0].message.content).summary
      setSummary(summary)
    } catch {
      toast.error("Something went wrong, please try again later")
    }
  }, [data])

  const addChatGPTMessage = (textToSummarize: string, summaryLength: string) => {
    setChatGPTMessages([
      ...chatGPTMessages,
      { role: "user", content: createPrompt(textToSummarize, summaryLength) }
    ])
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const textareaValue = formData.get("textarea") as string
    const summaryLengthValue = formData.get("summary-length") as string
    const summaryLength = rangeValues[summaryLengthValue as keyof RangeValuesProps]
    if (!textareaValue || textareaValue === "" || textareaValue?.length <= 1) return
    addChatGPTMessage(textareaValue, summaryLength)
  }

  return { handleSubmit, addChatGPTMessage, loading, summary }
}
