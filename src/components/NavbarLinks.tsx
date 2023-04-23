import { Item } from "./GrammarGateItem"
import links from "../utils/grammarGateLinks"
import IconWrapper from "./IconWrapper"
import { useRouter } from "next/router"
import { type FC } from "react"

const NavbarLinks: FC = () => {
  const router = useRouter()

  return (
    <nav className="w-full flex md:justify-center border-b-[0.5px] md:border-none border-white-2 dark:border-gray-3">
      <ul className="flex md:justify-center gap-0 px-5 h-full overflow-x-auto">
        {links?.map(link => (
          <Item
            className={`!rounded-none outline-[1px] odd:outline outline-gray-200 dark:outline-gray-700 relative ${
              router.pathname === link?.href ? "bg-white-2 dark:bg-gray-3" : ""
            }`}
            key={link?.name}
          >
            <Item.ItemLink href={link?.href} className="flex flex-col items-center gap-1 p-1 px-5">
              <Item.ImageWrapper className={`${link?.backgroundColor}`}>
                <IconWrapper icon={<link.icon />} className={`!w-3 !h-3 md:!w-5 md:!h-5`} />
              </Item.ImageWrapper>
              <Item.Text className="text-xs md:text-sm lg:text-md font-semibold text-text-gray dark:text-gray-200">
                {link?.name}
              </Item.Text>
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
  )
}

export default NavbarLinks
