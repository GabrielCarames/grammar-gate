import InfoButtonSection from "./InfoButtonSection"

export default function TextareaHeader() {
  return (
    <header className="bg-pink-1 py-8 px-2 md:px-5 h-max mb-10 rounded-md flex justify-between items-center">
      <h1 className="text-xl font-bold leading-none text-center">
        Grammar Checker |{" "}
        <span className="font-normal">Write your text and let us check your grammar!</span>
      </h1>
      <InfoButtonSection />
    </header>
  )
}
