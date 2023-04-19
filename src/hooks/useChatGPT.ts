import { useEffect, useState } from "react"
import askToChatGPT from "@/services/askToChatGPT"
import useAxios from "./useAxios"
import { AxiosError } from "axios"
import { ChatGPTMessageProps, UseChatGPTProps } from "@/interfaces"
import { getChatGPTResponse } from "@/utils/getChatGPTResponse"
import { NotificationFailure } from "@/utils/toastNotifications"

export const useChatGPT = ({ initialPrompt, customProperty, customSetState }: UseChatGPTProps) => {
  const [chatGPTMessages, setChatGPTMessages] = useState<ChatGPTMessageProps[]>([initialPrompt])
  const { makeRequest, data, loading, error } = useAxios()

  const checkForEmptyUserMessages = () =>
    chatGPTMessages.findIndex(message => message.role === "user") !== -1

  useEffect(() => {
    const userMessages = checkForEmptyUserMessages()
    if (!userMessages) return
    askToChatGPT(chatGPTMessages, makeRequest)
  }, [chatGPTMessages])

  useEffect(() => {
    if (!data) return
    const response = getChatGPTResponse(data)
    if (!response) return
    const responseData = customProperty ? response[customProperty] : response
    customSetState(responseData)
  }, [data])

  const checkForRateLimit = (error: AxiosError) =>
    error.response?.status === 429 &&
    NotificationFailure("You are making too many requests. Please try again in 30 seconds.")

  useEffect(() => {
    if (!error) return
    checkForRateLimit(error)
  }, [error])

  const addChatGPTMessage = (newMessage: ChatGPTMessageProps) => {
    setChatGPTMessages([...chatGPTMessages, newMessage])
  }

  return { addChatGPTMessage, loading }
}
