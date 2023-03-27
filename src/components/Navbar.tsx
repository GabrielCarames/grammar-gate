import { useRouter } from "next/router"
import links from "../utils/grammarGateLinks"
import { Item } from "./GrammarGateItem"

export default function Navbar() {
  const router = useRouter()

  return (
    <section className="w-full h-max max-h-32 bg-gray-1 border-r border-r-gray-2 mb-5 2xl:mb-0">
      <div className="w-full h-full flex flex-wrap lg:flex-row md:flex-nowrap items-center justify-center lg:justify-start">
        <div className="w-full md:max-w-max px-5 py-2 border-b-[0.5px] md:border-none border-gray-3">
          <h2 className="text-base md:text-lg font-semibold">Grammar Gate</h2>
        </div>
        <nav className="w-full flex justify-center border-b-[0.5px] md:border-none border-gray-3">
          <ul className="flex gap-1 px-5 h-full">
            {links.map(link => (
              <Item
                className={`!rounded-none relative md:py-1
                  ${router.pathname === link?.href ? "bg-gray-3" : ""}
                  `}
                key={link?.name}
              >
                <Item.ItemLink
                  href={link?.href}
                  className="flex flex-col items-center gap-1 p-1 px-5"
                >
                  <Item.ImageWrapper className={`${link?.backgroundColor}`}>
                    <Item.ItemImage src={link?.icon} alt="Image Alt Text" className="" />
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
      </div>
    </section>
  )
}
