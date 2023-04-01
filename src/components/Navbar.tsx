import { useRouter } from "next/router"
import links from "../utils/grammarGateLinks"
import { Item } from "./GrammarGateItem"
import Link from "next/link"
import { useTheme } from "next-themes"
import Icon from "./IconWrapper"
import SunIcon from "../../public/sun-icon.svg"
import MoonIcon from "../../public/moon-icon.svg"
import IconWrapper from "./IconWrapper"

export default function Navbar() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  return (
    <section className="w-full h-max max-h-32 bg-white dark:bg-gray-1 border-r border-r-gray-2 mb-5 2xl:mb-0 shadow-md">
      <div className="w-full h-full flex flex-wrap lg:flex-row md:flex-nowrap items-center justify-center lg:justify-start px-5">
        <div className="w-full md:max-w-max flex justify-between py-2 sm:py-0 border-b-[0.5px] md:border-none border-gray-3">
          <Link href="/">
            <h2 className="text-base md:text-lg font-semibold">Grammar Gate</h2>
          </Link>
          <button
            className="w-[40px] sm:hidden flex justify-center items-center bg-gray-1 dark:bg-white-2 dark:text-white rounded-[10px] p-3 box-border"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Icon
              icon={theme === "dark" ? <SunIcon /> : <MoonIcon />}
              className="min-w-[15px]"
              fill={`${theme === "dark" ? "!fill-black" : "!fill-white"}`}
              alt="Toggle dark mode"
            />
          </button>
        </div>
        <nav className="w-full flex justify-center border-b-[0.5px] md:border-none border-gray-3">
          <ul className="flex gap-1 px-5 h-full">
            {links.map(link => (
              <Item
                className={`!rounded-none relative
                  ${router.pathname === link?.href ? "bg-white-2 dark:bg-gray-3" : ""}
                  `}
                key={link?.name}
              >
                <Item.ItemLink
                  href={link?.href}
                  className="flex flex-col items-center gap-1 p-1 px-5"
                >
                  <Item.ImageWrapper className={`${link?.backgroundColor}`}>
                    <IconWrapper icon={<link.icon />} className={`w-3 h-3 md:w-5 md:h-5`} />
                  </Item.ImageWrapper>
                  <Item.Text className="text-xs md:text-sm lg:text-base">{link?.name}</Item.Text>
                </Item.ItemLink>
                <div
                  className={`absolute bottom-[-0.2px] left-0 w-full h-[1.5px] md:h-[3px] ${
                    router.pathname === link?.href ? link?.backgroundColor : ""
                  }`}
                ></div>
              </Item>
            ))}
          </ul>
        </nav>
        <button
          className="hidden w-[40px] sm:flex justify-center items-center bg-gray-1 dark:bg-white-2 dark:text-white rounded-[10px] p-3 box-border"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Icon
            icon={theme === "dark" ? <SunIcon /> : <MoonIcon />}
            className="min-w-[15px]"
            fill={`${theme === "dark" ? "!fill-black" : "!fill-white"}`}
            alt="Toggle dark mode"
          />
        </button>
      </div>
    </section>
  )
}
