import TextareaHeader from "./TextareaHeader"

export default function TextareaSection({ children }: { children: React.ReactNode }) {
  return <section className="w-full h-max max-w-[1000px]">{children}</section>
}

TextareaSection.Header = function Header({
  title,
  description
}: {
  title: string
  description: string
}) {
  return <TextareaHeader title={title} description={description} />
}
