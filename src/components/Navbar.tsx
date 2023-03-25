import { useRouter } from "next/router"
import links from "../utils/navbarLinks"
import NavbarLink from "./NavbarLink"

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
              <NavbarLink link={link} pathname={router.pathname} key={link.name} />
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
