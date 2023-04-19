import { AxiosHeaders } from "axios"
import { HeaderDescription, HeaderTitle, Languages, ResponseProperties } from "./enums"

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
}

export interface ChildrenProps {
  children: React.ReactNode
}

export type fromText = string
export type translatedText = string

export interface TranslatorProps {
  fromLanguage: Languages
  toLanguage: Languages
  fromText: fromText
  translatedText: translatedText
}

export interface OriginTranslator extends Omit<TranslatorProps, "translatedText"> {}

export type AddCorrectionProps = (newCorrections: CorrectionsProps) => void

export type SetSummaryProps = (newSummary: string) => void

export interface UseChatGPTProps {
  initialPrompt: ChatGPTMessageProps
  customProperty: ResponseProperties
  customSetState: AddCorrectionProps | SetSummaryProps
}
