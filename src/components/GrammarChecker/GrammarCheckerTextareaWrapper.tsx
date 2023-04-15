import { useGrammarChecker } from "@/hooks/useGrammarChecker"
import GrammarCheckerTextareaFooter from "./GrammarCheckerTextareaFooter"
import GrammarCheckerTextarea from "./GrammarCheckerTextarea"

const GrammarCheckerTextareaWrapper = (): JSX.Element => {
  const { onChange, loading, setTextToCorrect } = useGrammarChecker()

  return (
    <div className="border dark:border-gray-2 bg-white dark:bg-gray-1 rounded-md shadow-lg">
      <GrammarCheckerTextarea onChange={onChange} setTextToCorrect={setTextToCorrect} />
      <GrammarCheckerTextareaFooter loading={loading} />
    </div>
  )
}

export default GrammarCheckerTextareaWrapper
