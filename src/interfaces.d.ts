import { AxiosHeaders } from "axios"
import { HeaderDescription, HeaderTitle } from "./enums"

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

export interface TextWithCorrectionsProps {
  corrections: CorrectionProps[]
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
