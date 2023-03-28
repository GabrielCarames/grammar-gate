import InfoButtonSection from "./InfoButtonSection"

export default function TextareaHeader({
  title,
  description
}: {
  title: string
  description: string
}) {
  return (
    <header className="bg-pink-1 py-8 px-5 h-max mb-10 rounded-md flex justify-between items-center">
      <h1 className="text-base md:text-lg lg:text-xl font-bold leading-none text-center">
        {title} | <span className="font-normal text-base md:text-base">{description}</span>
      </h1>
      <InfoButtonSection />
    </header>
  )
}
