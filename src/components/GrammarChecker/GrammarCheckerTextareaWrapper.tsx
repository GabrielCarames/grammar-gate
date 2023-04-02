import { useTextarea } from "@/hooks/useTextarea"
import GrammarCheckerTextarea from "./GrammarCheckerTextarea"
import GrammarCheckerTextareaFooter from "./GrammarCheckerTextareaFooter"

export default function GrammarCheckerTextareaWrapper() {
  const { onChange, loading } = useTextarea()

  return (
    <div className="border dark:border-gray-2 bg-white dark:bg-gray-1 rounded-md shadow-lg">
      <GrammarCheckerTextarea onChange={onChange} />
      <GrammarCheckerTextareaFooter loading={loading} />
    </div>
  )
}
