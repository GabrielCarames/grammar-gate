import SummarizerTextareaFooter from "./SummarizerTextareaFooter"
import { useTextSummarizer } from "@/hooks/useTextSummarizer"

export default function TextSummarizerTextareaWrapper() {
  const { handleSubmit, value, loading, setValue } = useTextSummarizer()

  return (
    <div className="md:flex-1 w-full border border-gray-2 bg-gray-1 rounded-md">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full max-h-[250px] lg:max-h-[500px] bg-gray-1 h-max md:h-screen rounded-md outline-none resize-none p-5 text-base lg:text-lg"
          name="textarea"
          cols={30}
          rows={10}
          spellCheck={false}
          onChange={e => setValue(e.target.value)}
        />
        <SummarizerTextareaFooter value={value} loading={loading} />
      </form>
    </div>
  )
}
