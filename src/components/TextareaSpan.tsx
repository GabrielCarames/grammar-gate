export default function TextareaSpan({
  text,
  className,
  data
}: {
  text: string
  className?: string
  data: number | string
}) {
  return (
    <p className="w-min md:w-auto flex flex-wrap gap-x-1 justify-center items-center text-xs lg:text-base">
      <span className={`text-yellow-1 ${className}`}>{data}</span> {text}
    </p>
  )
}
