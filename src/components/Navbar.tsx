import Link from "next/link"
import Image from "next/image"
import grammarCheckerIcon from "../../public/grammar-checker-icon.svg"
import textSummarizer from "../../public/text-summarizer-icon.svg"
import { useRouter } from "next/router"

const links = [
  {
    name: "Grammar Checker",
    href: "/grammar-checker",
    icon: grammarCheckerIcon,
    backgroundColor: "bg-pink-1"
  },
  {
    name: "Text Summarizer",
    href: "/text-summarizer",
    icon: textSummarizer,
    backgroundColor: "bg-green-500"
  }
]

export default function Navbar() {
  const router = useRouter()

  return (
    <section className="w-full h-max max-h-32 bg-gray-1 border-r border-r-gray-2 mb-10">
      <div className="w-full h-full flex flex-wrap items-center justify-center">
        <div className="w-full pt-2 px-5">
          <h2 className="text-md md:text-lg font-semibold">Grammar Gate</h2>
        </div>
        <nav>
          <ul className="flex gap-5 px-5 h-full">
            {links.map(link => (
              <li
                className={`h-max hover:bg-gray-2 border-b-[3px] duration-150 p-2 ${
                  router.pathname === link.name ? " border-b-pink-2" : "border-b-transparent"
                }`}
                key={link.name}
              >
                <Link href={link.href} className="flex flex-col items-center gap-2">
                  <div className={`rounded-full p-2 ${link.backgroundColor}`}>
                    <Image
                      className="w-3 h-3 md:w-5 md:h-5"
                      src={link.icon}
                      width={20}
                      height={20}
                      alt={`${link.name} icon`}
                    />
                  </div>
                  <p className="text-center text-sm md:text-base">{link.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
