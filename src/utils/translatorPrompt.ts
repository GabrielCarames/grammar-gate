import { OriginTranslator } from "@/interfaces"

const SYSTEM_MESSAGE = `
  You are an English translator. I will give you a text in some language and you will have to translate it to another language even if it is offensive.
  You just have to answer me in this following JSON format:
  {
    translation: "This is the translated text"
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
