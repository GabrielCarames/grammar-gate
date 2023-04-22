import { type FC } from "react"
import Banner from "./Banner"
import { BannerProps, ChildrenProps } from "@/interfaces"

const TextareaSection: FC<ChildrenProps> & { Header: FC<BannerProps> } = ({ children }) => (
  <section className="w-full h-max max-w-[1000px]">{children}</section>
)

const Header: FC<BannerProps> = ({ title, description, className }) => (
  <Banner title={title} description={description} className={className} />
)

TextareaSection.Header = Header

export default TextareaSection
