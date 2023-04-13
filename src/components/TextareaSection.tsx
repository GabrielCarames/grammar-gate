import { type FC } from "react"
import Banner from "./Banner"
import { BannerProps } from "@/interfaces"

interface TextareaSectionProps {
  children: React.ReactNode
}

const TextareaSection: FC<TextareaSectionProps> & { Header: FC<BannerProps> } = ({ children }) => (
  <section className="w-full h-max max-w-[1000px]">{children}</section>
)

const Header: FC<BannerProps> = ({ title, description }) => (
  <Banner title={title} description={description} />
)

TextareaSection.Header = Header

export default TextareaSection
