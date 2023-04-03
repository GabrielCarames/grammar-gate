import { useGrammarChecker } from "@/hooks/useGrammarChecker"
import GrammarCheckerTextarea from "./GrammarCheckerTextarea"
import GrammarCheckerTextareaFooter from "./GrammarCheckerTextareaFooter"

export default function GrammarCheckerTextareaWrapper() {
  const { onChange, loading } = useGrammarChecker()

  return (
    <div className="border dark:border-gray-2 bg-white dark:bg-gray-1 rounded-md shadow-lg">
      <GrammarCheckerTextarea onChange={onChange} />
      <GrammarCheckerTextareaFooter loading={loading} />
    </div>
  )
}
