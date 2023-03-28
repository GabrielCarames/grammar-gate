import { useTextarea } from "@/hooks/useTextarea"
import Textarea from "./Textarea"
import TextareaHeader from "./TextareaHeader"
import TextareaFooter from "./TextareaFooter"

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

TextareaSection.TextareaWrapper = function TextareaWrapper({
  children,
  className
}: {
  children?: React.ReactNode
  className?: string
}) {
  const { onChange, loading } = useTextarea()

  return (
    <div className={`border border-gray-2 bg-gray-1 rounded-md ${className}`}>
      <Textarea onChange={onChange} />
      {children ? children : <TextareaFooter loading={loading} />}
    </div>
  )
}
