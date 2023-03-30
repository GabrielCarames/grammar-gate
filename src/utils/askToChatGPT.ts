import { ChatGPTJSON_dataProps, MakeRequestProps, ChatGPTMessageProps } from "@/interfaces"

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
}

const url = "https://api.openai.com/v1/chat/completions"

const askToChatGPT = async (
  currentChatGPTMessages: ChatGPTMessageProps[],
  makeRequest: MakeRequestProps
) => {
  const json_data: ChatGPTJSON_dataProps = {
    model: "gpt-3.5-turbo",
    messages: [...currentChatGPTMessages],
    temperature: 1
  }
  const res = await makeRequest(url, json_data, headers)
  const chatinatorAnswer = res?.choices[0].message.content
  return chatinatorAnswer
}

export default askToChatGPT
