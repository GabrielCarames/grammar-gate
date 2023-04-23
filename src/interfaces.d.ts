import { AxiosHeaders } from "axios"
import {
  AUTO_LANGUAGE,
  HeaderDescription,
  HeaderTitle,
  Languages,
  ResponseProperties
} from "./enums"

export interface ChatGPTMessageProps {
  role: string
  content: string
}

export interface CorrectionProps {
  id: string
  type: string
  explanation: string
  result: string[]
}

export interface CorrectionsListProps extends Array<CorrectionProps> {}

export interface CorrectionsProps {
  correctionsList: CorrectionsListProps
  correctedText: string
}

export interface MakeRequestProps {
  (
    url: string,
    payload: ChatGPTJSON_dataProps,
    headers: AxiosHeaders["Content-Type, Authorization"]
  ): Promise<any>
}

export interface ChatGPTJSON_dataProps {
  model: string
  messages: ChatGPTMessageProps[]
  temperature: number
}

export interface NavbarLinkProps {
  name: string
  href: string
  icon: string
  backgroundColor: string
}

export interface BannerProps {
  title: HeaderTitle
  description: HeaderDescription
  className?: string
}

export interface ChildrenProps {
  children: React.ReactNode
}

export type AddCorrectionProps = (newCorrections: CorrectionsProps) => void

export type SetSummaryProps = (newSummary: string) => void

export type SetTranslationProps = (text: TranslationProps) => void

export interface UseChatGPTProps {
  initialPrompt: ChatGPTMessageProps
  customProperty: ResponseProperties
  customSetState: AddCorrectionProps | SetSummaryProps | SetTranslationProps
}

export type FromText = string
export type TranslatedText = string
export type detectedLanguage = null | Language
export type FromLanguageProps = Languages | typeof AUTO_LANGUAGE
export type TranslationProps = {
  translatedText: TranslatedText
  detectedLanguage: detectedLanguage
}

export interface TranslatorProps {
  fromLanguage: FromLanguageProps
  toLanguage: Languages
  fromText: FromText
  translation: TranslationProps
}

export interface LanguageSectionProps {
  fromLanguage?: FromLanguageProps
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  languageSelectorValue: FromLanguageProps
  options: Languages[]
  textareaValue: string
  textareaOnchange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  translation: TranslationProps
  loading?: boolean
  setFromText?: (text: FromText) => void
}

export interface OriginTranslator extends Omit<TranslatorProps, "translation"> {}

export interface ModalContentProps {
  content: {
    "How It Works": string[]
    Limitations: string[]
    "Common Mistakes"?: string[]
    "Common Features"?: string[]
    Tips: string[]
    Disclaimers: string[]
  }
}
