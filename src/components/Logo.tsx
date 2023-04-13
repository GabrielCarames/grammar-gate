import Link from "next/link"
import ThemeButton from "./ThemeButton"
import { type FC } from "react"

const Logo: FC = () => {
  return (
    <div className="w-full md:max-w-max flex justify-between items-center py-2 border-b-[0.5px] md:border-none border-white-2 dark:border-gray-3 px-5 md:px-0">
      <Link href="/">
        <h2 className="text-base md:text-lg text-gray-1 dark:text-white">
          <span className="text-pink-1 font-bold text-xl">G</span>
          rammar Gate
        </h2>
      </Link>
      <ThemeButton />
    </div>
  )
}

export default Logo
