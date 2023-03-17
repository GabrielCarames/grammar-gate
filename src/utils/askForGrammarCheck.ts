const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
}

const url = "https://api.openai.com/v1/chat/completions"

const askForGrammarCheck = async (currentMessages: any, makeRequest: any) => {
  const json_data = {
    model: "gpt-3.5-turbo",
    messages: [...currentMessages],
    temperature: 0.7
  }
  const res = await makeRequest(url, json_data, headers)
  const chatinatorAnswer = res?.choices[0].message.content
  return chatinatorAnswer
}

export default askForGrammarCheck
