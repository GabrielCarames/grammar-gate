import TextareaFooter from "./TextareaFooter"
import TextareaHeader from "./TextareaHeader"
import Textarea from "./Textarea"

export default function TextareaSection() {
  return (
    <section className="w-[1000px]">
      <TextareaHeader />
      <div className=" border border-gray-2 bg-gray-1 rounded-md">
        <Textarea />
        <TextareaFooter />
      </div>
    </section>
  )
}
