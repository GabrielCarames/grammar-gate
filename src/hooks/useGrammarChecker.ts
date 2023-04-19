import { useEffect, useState } from "react"
import { createSystemMessage, createUserMessage } from "@/utils/grammarCheckerPrompt"
import { useBoundStore } from "@/zustand/useBoundStore"
import { useChatGPT } from "./useChatGPT"
import { ResponseProperties } from "@/enums.d"

export const useGrammarChecker = () => {
  const { addCorrection, setValue } = useBoundStore()
  const [textToCorrect, setTextToCorrect] = useState("")
  const { addChatGPTMessage, loading } = useChatGPT({
    initialPrompt: createSystemMessage(),
    customProperty: ResponseProperties.CORRECTIONS,
    customSetState: addCorrection
  })

  useEffect(() => {
    if (textToCorrect?.length <= 1) return
    const timeout = setTimeout(() => {
      const userMessage = createUserMessage(textToCorrect)
      addChatGPTMessage(userMessage)
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [textToCorrect])

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextToCorrect(e.target.value)
    setValue(e.target.value)
  }

  return { onChange, loading, setTextToCorrect }
}
