import { useEffect, useState } from "react"
import askForGrammarCheck from "@/utils/askForGrammarCheck"
import useAxios from "./useAxios"
import { createConsecutivePrompt, createFirstPrompt } from "@/utils/prompt"
import { MessageProps } from "@/interfaces"
import { useValueContext } from "@/contexts/ValueContext"
import { useCorrectionsContext } from "@/contexts/CorrectionsContext"

export const useTextarea = () => {
  const { value, setValue } = useValueContext()
  const { corrections, setCorrections } = useCorrectionsContext()
  const [textToCorrect, setTextToCorrect] = useState("")
  const [messages, setMessages] = useState<MessageProps[]>([])
  const { makeRequest, data, error, loading } = useAxios()

  const createNewMessage = (message: string) => {
    if (messages.length === 0)
      setMessages([...messages, { role: "user", content: createFirstPrompt(message) }])
    else
      setMessages([
        ...messages,
        {
          role: "user",
          content: createConsecutivePrompt(message, corrections.textCorrected)
        }
      ])
  }

  useEffect(() => {
    if (messages.length === 0) return
    askForGrammarCheck(messages, makeRequest)
  }, [messages])

  useEffect(() => {
    if (textToCorrect.length <= 1) return
    const timeout = setTimeout(() => {
      createNewMessage(textToCorrect)
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [textToCorrect])

  useEffect(() => {
    if (!data) return
    const correction = JSON.parse(data.choices[0].message.content)
    setCorrections(correction)
  }, [data])

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextToCorrect(e.target.value)
    setValue(e.target.value)
  }

  return { value, onChange }
}
