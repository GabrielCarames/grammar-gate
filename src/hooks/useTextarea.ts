import askForGrammarCheck from "@/utils/askForGrammarCheck"
import { useEffect, useState } from "react"
import useAxios from "./useAxios"
import createPrompt from "@/utils/prompt"

export const useTextarea = () => {
  const [value, setValue] = useState("")
  const [messages, setMessages] = useState<any>([])
  const { makeRequest, data, error, loading } = useAxios()

  const createNewMessage = (message: string) => {
    setMessages([
      ...messages,
      { role: "user", content: createPrompt(message) }
      // { role: "assistant", content: createPrompt(message) },
    ])
  }

  useEffect(() => {
    if (messages.length === 0) return
    askForGrammarCheck(messages, makeRequest)
  }, [messages])

  useEffect(() => {
    if (!value) return
    const timeout = setTimeout(() => {
      console.log(value)
      createNewMessage(value)
    }, 500)

    return () => {
      clearTimeout(timeout)
    }
  }, [value])

  useEffect(() => {
    if (!data) return
    const response = data.choices[0].message.content
    const regex = /^- (.+)\n\nExplicación del texto a corregir: (.+)\n\nTexto corregido: (.+)$/gm
    const text = response
    let match
    while ((match = regex.exec(text)) !== null) {
      const wordsToCorrect = match[1]
      const explanation = match[2]
      const correctedText = match[3]
      console.log(
        "wordsToCorrect: ",
        wordsToCorrect,
        "explanation:",
        explanation,
        "correctedText: ",
        correctedText
      )
    }
  }, [data])

  const onChange = (e: any) => setValue(e.target.value)

  return { value, onChange }
}
