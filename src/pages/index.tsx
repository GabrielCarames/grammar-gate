import homeText from "../utils/homeText.json"
import links from "../utils/grammarGateLinks"
import { Item } from "../components/GrammarGateItem"
import IconWrapper from "@/components/IconWrapper"
import ThemeButton from "@/components/ThemeButton"

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-white dark:bg-black text-text-gray dark:text-white w-full min-h-screen h-max">
      <ThemeButton className="!flex absolute right-2 top-2 z-10" />
      <main className="flex flex-col sm:items-center gap-12 md:gap-20 w-full max-w-max h-full px-5 py-10 relative">
        <header className="flex flex-col gap-5 items-center justify-center w-full max-w-[900px]">
          <h1 className="text-3xl lg:text-5xl text-[#F380F0] text-center">
            <strong>{homeText?.name}</strong>
          </h1>
          <h2 className="text-xl lg:text-3xl text-orange-500 dark:text-yellow-1 font-bold text-center">
            {homeText?.title}
          </h2>
          <p className="text-center text-base sm:text-lg font-semibold max-w-xl lg:max-w-none">
            {homeText?.subititle}
          </p>
        </header>
        <ul className="h-full flex flex-wrap justify-center gap-x-20 gap-y-5 font-bold">
          {links?.map((link, index) => (
            <Item
              className={`w-max !h-auto flex flex-col gap-1 border-[2px] dark:border-gray-1 rounded-md ${link?.borderColor} hover:bg-gray-3`}
              key={link?.name}
            >
              <Item.ItemLink href={link?.href} className="flex flex-col items-center gap-2 p-5">
                <Item.ImageWrapper className={`p-4 sm:!p-5 ${link?.backgroundColor}`}>
                  <IconWrapper icon={<link.icon />} className={`w-5 h-5 sm:!w-10 sm:!h-10`} />
                </Item.ImageWrapper>
                <Item.Text className="!text-lg">{link?.name}</Item.Text>
                <p className="w-full max-w-[400px] font-normal text-center text-sm md:text-base">
                  {homeText?.functionalities[index]?.description}
                </p>
              </Item.ItemLink>
            </Item>
          ))}
        </ul>
      </main>
    </div>
  )
}
