export default function Span({
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
      <span className={`text-pink-2 dark:text-yellow-1 ${className}`}>{data}</span> {text}
    </p>
  )
}