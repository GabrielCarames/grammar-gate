import Head from "next/head"
import homeText from "../utils/homeText.json"
import links from "../utils/navbarLinks"
import NavbarLink from "@/components/NavbarLink"

export default function Home() {
  return (
    <>
      <Head>
        <title>Grammar Gate</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-center bg-black text-white w-full min-h-screen h-max">
        <section className="flex flex-col gap-20 w-full max-w-max h-full px-5 py-10">
          <header className="flex flex-col gap-5 items-center justify-center w-full max-w-[900px]">
            <h1 className="text-2xl sm:text-3xl text-pink-1 text-center">{homeText?.title}</h1>
            <p className="text-center text-base sm:text-lg font-semibold">{homeText?.subititle}</p>
          </header>
          <ul className="h-max flex flex-wrap justify-center gap-x-20 gap-y-5 font-bold">
            {links.map((link, index) => (
              <div
                className="w-max h-max flex flex-col gap-1 border-[2px] border-gray-1 p-5 rounded-md"
                key={index}
              >
                <NavbarLink
                  link={link}
                  imageDivClassName="p-4 sm:!p-5"
                  imageClassName="w-5 h-5 sm:!w-10 sm:!h-10"
                  linkNameClassName="!text-lg"
                />
                <p className="w-full max-w-[400px] font-normal text-center text-sm">
                  {homeText.functionalities[index].description}
                </p>
              </div>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
