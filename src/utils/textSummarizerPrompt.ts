export const createFirstPrompt = (textToSummarize: string, summaryLength: string) => {
  const firstPrompt = `
    I want you to act as a text summarizer and provide a concise summary of a given article or text. Your summary should must be ${summaryLength} long and should accurately capture the main points and ideas of the original text. Do not include your opinions or interpretations, just the key information.
    I need you to answer me in JSON format with a field called "summary" and the summary as its value. Do not include any other field or value. Do not include any other text or explanation without me asking you to do so.
    This is the text to summarize: ${textToSummarize}
  `
  return firstPrompt
}

export const createConsecutivePrompt = (
  textToSummarize: string,
  previousTextSummarized: string
) => {
  const consecutivePrompt = `

    Texto que corregiste en la anterior petición: ${previousTextSummarized}
    Nuevo texto para corregir: ${textToSummarize}
  `
  return consecutivePrompt
}
