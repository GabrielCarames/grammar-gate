export default function IconWrapper({
  icon,
  className,
  fill,
  alt
}: {
  icon: any
  className?: string
  fill?: string
  alt?: string
}) {
  const Icon = () => icon

  return (
    <div
      className={`flex justify-center items-center w-[20px] h-full dark:fill-white fill-dark-1 ${
        className ? className : ""
      } ${fill ? `${fill}` : ""}`}
      role="img"
      aria-label={alt}
    >
      <Icon />
    </div>
  )
}
