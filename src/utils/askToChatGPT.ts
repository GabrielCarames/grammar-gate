import { ChatGPTJSON_dataProps, MakeRequestProps, ChatGPTMessageProps } from "@/interfaces"
import { NotificationFailure } from "./toastNotifications"

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
}

const url = "https://api.openai.com/v1/chat/completions"

const askToChatGPT = async (
  currentChatGPTMessages: ChatGPTMessageProps[],
  makeRequest: MakeRequestProps
) => {
  try {
    const json_data: ChatGPTJSON_dataProps = {
      model: "gpt-3.5-turbo",
      messages: [...currentChatGPTMessages],
      temperature: 1
    }
    const res = await makeRequest(url, json_data, headers)
    if (!res?.choices || res.choices.length === 0)
      return NotificationFailure("Something went wrong, please try again later")
    const chatinatorAnswer = res.choices[0].message.content
    return chatinatorAnswer
  } catch (error) {
    return NotificationFailure("Something went wrong, please try again later")
  }
}

export default askToChatGPT
