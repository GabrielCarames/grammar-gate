import { type FC } from "react"
import InfoButtonSection from "./InfoButtonSection"

interface BannerProps {
  title: string
  description: string
}

const Banner: FC<BannerProps> = ({ title, description }) => {
  return (
    <header className="bg-pink-1 p-5 h-max mb-5 rounded-md flex justify-between items-center">
      <h1 className="text-base md:text-lg lg:text-xl font-bold leading-none text-center">
        {title} | <span className="font-normal text-base md:text-lg">{description}</span>
      </h1>
      <InfoButtonSection />
    </header>
  )
}

export default Banner
