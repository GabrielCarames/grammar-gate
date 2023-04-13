import { Item } from "./GrammarGateItem"
import links from "../utils/grammarGateLinks"
import IconWrapper from "./IconWrapper"
import { useRouter } from "next/router"
import { type FC } from "react"

const NavbarLinks: FC = () => {
  const router = useRouter()

  return (
    <nav className="w-full flex justify-center border-b-[0.5px] md:border-none border-white-2 dark:border-gray-3">
      <ul className="flex gap-1 px-5 h-full">
        {links?.map(link => (
          <Item
            className={`!rounded-none relative
                  ${router.pathname === link?.href ? "bg-white-2 dark:bg-gray-3" : ""}
                  `}
            key={link?.name}
          >
            <Item.ItemLink href={link?.href} className="flex flex-col items-center gap-1 p-1 px-5">
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
  )
}

export default NavbarLinks
