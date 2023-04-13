import { type FC } from "react"

interface IconWrapperProps {
  icon: any
  className?: string
  fill?: string
  alt?: string
}

const IconWrapper: FC<IconWrapperProps> = ({ icon, className, fill, alt }) => {
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

export default IconWrapper
