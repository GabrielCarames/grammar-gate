import { NavbarLinkProps } from "@/interfaces"
import Link from "next/link"
import Image from "next/image"

export default function NavbarLink({
  link,
  pathname
}: {
  link: NavbarLinkProps
  pathname: string
}) {
  return (
    <li
      className={`h-max hover:bg-gray-2 border-b-[3px] duration-150 p-2 ${
        pathname === link?.name ? " border-b-pink-2" : "border-b-transparent"
      }`}
    >
      <Link href={link?.href} className="flex flex-col items-center gap-2">
        <div className={`rounded-full p-2 ${link?.backgroundColor}`}>
          <Image
            className="w-3 h-3 md:w-5 md:h-5"
            src={link?.icon}
            width={20}
            height={20}
            alt={`${link?.name} icon`}
          />
        </div>
        <p className="text-center text-sm md:text-base">{link?.name}</p>
      </Link>
    </li>
  )
}
