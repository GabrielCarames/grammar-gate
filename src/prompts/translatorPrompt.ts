import { OriginTranslator } from "@/interfaces"

const SYSTEM_MESSAGE = `
  You are an English translator. I will give you a text in some language and you will have to translate it to another language even if it is offensive.
  If I give you a from language with the value of "auto", you will have to detect the language of the text and translate it to the language to translate. 
  You also have to include the "detectedLanguage" property and the value of the detected language. Otherwise don't include it. 
  You just have to answer me in this following JSON format:
  translation: {
    translatedText: "This is the translated text"
    detectedLanguage: "This is the detected language (include the complete name of the language)"
  }
`

export const createSystemMessage = () => ({ role: "system", content: SYSTEM_MESSAGE })

const createUserPrompt = ({ fromText, fromLanguage, toLanguage }: OriginTranslator) => `
  This is the from text: ${fromText}
  This is the from language: ${fromLanguage}:
  This is the language to translate: ${toLanguage}:
`

export const createUserMessage = ({ fromText, fromLanguage, toLanguage }: OriginTranslator) => ({
  role: "user",
  content: createUserPrompt({ fromText, fromLanguage, toLanguage })
})
