import askForGrammarCheck from "@/utils/askForGrammarCheck"
import { useEffect, useState } from "react"
import useAxios from "./useAxios"
import createPrompt from "@/utils/prompt"

export const useTextarea = () => {
  const [value, setValue] = useState("")
  const [textToCorrect, setTextToCorrect] = useState("")
  const [messages, setMessages] = useState<any>([])
  const [corrections, setCorrections] = useState<any>([])
  const { makeRequest, data, error, loading } = useAxios()

  const createNewMessage = (message: string) => {
    setMessages([...messages, { role: "user", content: createPrompt(message) }])
  }

  useEffect(() => {
    if (messages.length === 0) return
    askForGrammarCheck(messages, makeRequest)
  }, [messages])

  useEffect(() => {
    if (textToCorrect.length <= 1) return
    const timeout = setTimeout(() => {
      console.log(textToCorrect)
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

  const onChange = (e: any) => {
    setTextToCorrect(e.target.value)
    setValue(e.target.value)
  }

  return { value, setValue, onChange, corrections, setCorrections }
}
