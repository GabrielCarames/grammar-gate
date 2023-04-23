import { type FC } from "react"
import InfoButtonSection from "./InfoButtonSection"
import { BannerProps } from "@/interfaces"

const Banner: FC<BannerProps> = ({ title, description, className }) => {
  return (
    <header className={`p-5 h-max mb-5 rounded-md flex justify-between items-center ${className}`}>
      <h1 className="text-base md:text-lg lg:text-xl font-bold leading-none text-center">
        {title} | <span className="font-normal text-base md:text-lg">{description}</span>
      </h1>
      <InfoButtonSection />
    </header>
  )
}

export default Banner
