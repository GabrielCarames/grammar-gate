import { NavbarLinkProps } from "@/interfaces"
import Link from "next/link"
import Image from "next/image"

export default function NavbarLink({
  link,
  pathname,
  imageClassName,
  imageDivClassName,
  linkNameClassName
}: {
  link: NavbarLinkProps
  pathname?: string
  imageClassName?: string
  imageDivClassName?: string
  linkNameClassName?: string
}) {
  return (
    <li
      className={`h-max rounded-md hover:bg-gray-2 border-b-[3px] duration-150 p-2 ${
        pathname === link?.name ? " border-b-pink-2" : "border-b-transparent"
      }`}
    >
      <Link href={link?.href} className="flex flex-col items-center gap-2">
        <div className={`rounded-full p-2 ${link?.backgroundColor} ${imageDivClassName}`}>
          <Image
            className={`w-3 h-3 md:w-5 md:h-5 ${imageClassName}`}
            src={link?.icon}
            width={20}
            height={20}
            alt={`${link?.name} icon`}
          />
        </div>
        <p className={`text-center text-sm md:text-base ${linkNameClassName}`}>{link?.name}</p>
      </Link>
    </li>
  )
}
