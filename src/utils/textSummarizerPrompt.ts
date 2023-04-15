const SYSTEM_PROMPT = `
  I want you to act as a text summarizer and provide a concise summary of a given article or text. 
  Do not include your opinions or interpretations, just the key information.
  I need you to answer me in JSON format with a field called "summary" and the summary as its value. 
  Do not include any other field or value. Do not include any other text or explanation without me asking you to do so.
`

const USER_PROMPT = (summaryLength: string, textToSummarize: string) => `
  Your summary should must be ${summaryLength} long and should accurately capture the main points and ideas of the original text.
  This is the text to summarize: ${textToSummarize}
`

export const createFirstSystemPrompt = () => ({ role: "system", content: SYSTEM_PROMPT })

export const createUserPrompt = (textToSummarize: string, summaryLength: string) => ({
  role: "user",
  content: USER_PROMPT(summaryLength, textToSummarize)
})
