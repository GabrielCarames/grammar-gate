import { useEffect, useState } from "react"
import { useBoundStore } from "@/zustand/useBoundStore"
import { useChatGPT } from "./useChatGPT"
import { Languages, ResponseProperties } from "@/enums.d"
import { createSystemMessage, createUserMessage } from "@/prompts/translatorPrompt"

export const useTranslator = () => {
  const {
    fromLanguage,
    setFromLanguage,
    fromText,
    setFromText,
    toLanguage,
    setToLanguage,
    translation,
    setTranslation,
    switchLanguages
  } = useBoundStore()
  const { addChatGPTMessage, loading } = useChatGPT({
    initialPrompt: createSystemMessage(),
    customProperty: ResponseProperties.TRANSLATION,
    customSetState: setTranslation
  })

  useEffect(() => {
    if (fromText?.length <= 1) return
    const timeout = setTimeout(() => {
      const userMessage = createUserMessage({ fromText, fromLanguage, toLanguage })
      addChatGPTMessage(userMessage)
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [fromText])

  const onFromLanguageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFromText(e.target.value)
  }

  const handleFromLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value as Languages
    setFromLanguage(language)
  }

  const handleToLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value as Languages
    setToLanguage(language)
  }

  return {
    fromLanguage,
    handleFromLanguage,
    toLanguage,
    handleToLanguage,
    onFromLanguageChange,
    translation,
    fromText,
    switchLanguages
  }
}
