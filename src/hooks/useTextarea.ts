import { useEffect, useState } from "react"
import askForGrammarCheck from "@/utils/askForGrammarCheck"
import useAxios from "./useAxios"
import createPrompt from "@/utils/prompt"
import { CorrectionsProps, MessageProps } from "@/interfaces"
import { useValueContext } from "@/contexts/ValueContext"

export const useTextarea = () => {
  const { value, setValue } = useValueContext()
  const [textToCorrect, setTextToCorrect] = useState("")
  const [messages, setMessages] = useState<MessageProps[]>([])
  const [corrections, setCorrections] = useState<CorrectionsProps>({
    corrections: [],
    textCorrected: ""
  })
  const { makeRequest, data, error, loading } = useAxios()

  const createNewMessage = (message: string) =>
    setMessages([...messages, { role: "user", content: createPrompt(message) }])

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

  return { value, setValue, onChange, corrections, setCorrections }
}
