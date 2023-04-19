import { useBoundStore } from "@/zustand/useBoundStore"
import { useChatGPT } from "./useChatGPT"
import { createSystemMessage, createUserMessage } from "@/utils/textSummarizerPrompt"
import { ResponseProperties } from "@/enums.d"

enum RangeValuesEnums {
  VERY_SHORT = "very short",
  SHORT = "short",
  MEDIUM = "medium",
  LONG = "long"
}

type RangeValuesProps = {
  [key: string]: RangeValuesEnums
}

const rangeValues: RangeValuesProps = {
  "0": RangeValuesEnums.VERY_SHORT,
  "1": RangeValuesEnums.SHORT,
  "2": RangeValuesEnums.MEDIUM,
  "3": RangeValuesEnums.LONG
}

export const useTextSummarizer = () => {
  const { summary, setSummary } = useBoundStore()
  const { addChatGPTMessage, loading } = useChatGPT({
    initialPrompt: createSystemMessage(),
    customProperty: ResponseProperties.SUMMARY,
    customSetState: setSummary
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const textareaValue = formData.get("textarea") as string
    const summaryLengthValue = formData.get("summary-length") as string
    const summaryLength = rangeValues[summaryLengthValue as keyof RangeValuesProps]
    if (!textareaValue || textareaValue === "" || textareaValue?.length <= 1) return
    const userMessage = createUserMessage(textareaValue, summaryLength)
    addChatGPTMessage(userMessage)
  }

  return { handleSubmit, loading, summary }
}
