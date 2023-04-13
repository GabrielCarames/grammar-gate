import { type FC } from "react"
import Banner from "./Banner"

interface TextareaSectionProps {
  children: React.ReactNode
}

interface HeaderProps {
  title: string
  description: string
}

const TextareaSection: FC<TextareaSectionProps> & { Header: FC<HeaderProps> } = ({ children }) => (
  <section className="w-full h-max max-w-[1000px]">{children}</section>
)

const Header: FC<HeaderProps> = ({ title, description }) => (
  <Banner title={title} description={description} />
)

TextareaSection.Header = Header

export default TextareaSection
