import TextareaBanner from "./TextareaBanner"

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
  return <TextareaBanner title={title} description={description} />
}
