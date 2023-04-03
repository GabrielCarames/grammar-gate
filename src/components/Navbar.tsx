import { useRouter } from "next/router"
import { Item } from "./GrammarGateItem"
import links from "../utils/grammarGateLinks"
import IconWrapper from "./IconWrapper"
import ThemeButton from "./ThemeButton"
import Logo from "./Logo"

export default function Navbar() {
  const router = useRouter()

  return (
    <section className="w-full h-max bg-white dark:bg-gray-1 border-r dark:border-r-gray-2 mb-5 2xl:mb-0 shadow-md">
      <div className="w-full h-full flex flex-wrap lg:flex-row md:flex-nowrap items-center justify-center lg:justify-start md:px-5">
        <Logo />
        <nav className="w-full flex justify-center border-b-[0.5px] md:border-none border-white-2 dark:border-gray-3">
          <ul className="flex gap-1 px-5 h-full">
            {links?.map(link => (
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
                    <IconWrapper icon={<link.icon />} className={`!w-3 !h-3 md:w-5 md:h-5`} />
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
        <ThemeButton className="!hidden md:!flex" />
      </div>
    </section>
  )
}
