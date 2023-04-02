import { useTextarea } from "@/hooks/useTextarea"
import GrammarCheckerTextarea from "./GrammarCheckerTextarea"
import TextareaFooter from "../TextareaFooter"

export default function GrammarCheckerTextareaWrapper() {
  const { onChange, loading } = useTextarea()

  return (
    <div className="border dark:border-gray-2 bg-white dark:bg-gray-1 rounded-md shadow-lg">
      <GrammarCheckerTextarea onChange={onChange} />
      <TextareaFooter loading={loading} />
    </div>
  )
}
