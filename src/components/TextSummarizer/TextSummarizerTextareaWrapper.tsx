import { useBoundStore } from "@/zustand/useBoundStore"
import TextSummarizerTextareaFooter from "./TextSummarizerTextareaFooter"
import { useTextSummarizer } from "@/hooks/useTextSummarizer"
import ExampleTextButton from "../ExampleTextButton"
import Textarea from "../Textarea"
import TextareaWrapper from "../TextareaWrapper"

const EXAMPLE_TEXT =
  "Virtual reality (VR) is a computer-generated environment that simulates a physical presence in a three-dimensional space. By using VR headsets, users can interact with digital environments that feel like real life. VR is used in a variety of fields, such as gaming, education, and training simulations. Its potential applications are continuously expanding as technology advances."

const TextSummarizerTextareaWrapper = (): JSX.Element => {
  const { handleSubmit, loading, onChange } = useTextSummarizer()
  const { value } = useBoundStore()

  return (
    <TextareaWrapper>
      <form onSubmit={handleSubmit}>
        <Textarea onChange={onChange} value={value} name="textarea" />
        {value.length <= 0 && <ExampleTextButton exampleText={EXAMPLE_TEXT} />}
        <TextSummarizerTextareaFooter value={value} loading={loading} />
      </form>
    </TextareaWrapper>
  )
}

export default TextSummarizerTextareaWrapper
