import { type FC } from "react"
import Banner from "./Banner"
import { BannerProps, ChildrenProps, ModalContentProps } from "@/interfaces"

const TextareaSection: FC<ChildrenProps> & { Header: FC<BannerProps & ModalContentProps> } = ({
  children
}) => <section className="w-full h-max max-w-[1000px]">{children}</section>

const Header: FC<BannerProps & ModalContentProps> = ({
  title,
  description,
  className,
  content
}) => <Banner title={title} description={description} className={className} content={content} />

TextareaSection.Header = Header

export default TextareaSection
