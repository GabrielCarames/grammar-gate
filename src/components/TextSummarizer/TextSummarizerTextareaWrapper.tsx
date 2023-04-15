import { useBoundStore } from "@/zustand/useBoundStore"
import TextSummarizerTextareaFooter from "./TextSummarizerTextareaFooter"
import { useTextSummarizer } from "@/hooks/useTextSummarizer"
import ExampleTextButton from "../ExampleTextButton"

const EXAMPLE_TEXT =
  "Virtual reality (VR) is a computer-generated environment that simulates a physical presence in a three-dimensional space. By using VR headsets, users can interact with digital environments that feel like real life. VR is used in a variety of fields, such as gaming, education, and training simulations. Its potential applications are continuously expanding as technology advances."

const TextSummarizerTextareaWrapper = (): JSX.Element => {
  const { handleSubmit, loading } = useTextSummarizer()
  const { value, setValue } = useBoundStore()

  return (
    <section className="md:flex-1 w-full border dark:border-gray-2 bg-white dark:bg-gray-1 rounded-md shadow-lg relative">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full max-h-[250px] lg:max-h-[500px] bg-white dark:bg-gray-1 text-text-gray dark:text-white h-max md:h-screen rounded-md outline-none resize-none p-5 text-base lg:text-lg"
          name="textarea"
          cols={30}
          rows={10}
          spellCheck={false}
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Write your text here..."
          autoFocus
        />
        {value.length <= 0 && <ExampleTextButton exampleText={EXAMPLE_TEXT} />}
        <TextSummarizerTextareaFooter value={value} loading={loading} />
      </form>
    </section>
  )
}

export default TextSummarizerTextareaWrapper
