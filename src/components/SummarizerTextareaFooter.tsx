import Button from "./Button"
import TextareaSpan from "./TextareaSpan"

export default function SummarizerTextareaFooter() {
  return (
    <div className="w-full h-max flex flex-col-reverse md:flex-row justify-cente gap-y-2 md:justify-between items-center px-5 py-2">
      <div className="w-full h-max flex justify-center md:justify-start gap-5">
        <TextareaSpan text="Sentences" data={32} />
        <TextareaSpan text="Words" data={32} />
      </div>
      <Button
        loading={false}
        availableData={false}
        onClick={() => console.log("Hoila")}
        text="Summarize"
      />
    </div>
  )
}
