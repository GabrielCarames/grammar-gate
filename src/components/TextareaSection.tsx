import TextareaFooter from "./TextareaFooter"
import TextareaHeader from "./TextareaHeader"
import Textarea from "./Textarea"
import { useTextarea } from "@/hooks/useTextarea"

export default function TextareaSection() {
  const { value, onChange, loading } = useTextarea()

  return (
    <section className="w-[1000px]">
      <TextareaHeader />
      <div className=" border border-gray-2 bg-gray-1 rounded-md">
        <Textarea value={value} onChange={onChange} />
        <TextareaFooter loading={loading} />
      </div>
    </section>
  )
}
