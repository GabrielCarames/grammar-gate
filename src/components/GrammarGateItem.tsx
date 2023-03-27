import Image from "next/image"
import Link from "next/link"

const Item = ({ children, className }: { children: React.ReactNode; className: string }) => {
  return (
    <li className={`h-max rounded-md hover:bg-gray-2 border-b-[3px] duration-150 ${className}`}>
      {children}
    </li>
  )
}

Item.ItemLink = function ItemLink({
  href,
  className,
  children
}: {
  href: string
  className: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

Item.ImageWrapper = function ImageWrapper({
  children,
  className
}: {
  children: React.ReactNode
  className: string
}) {
  return <div className={`rounded-full p-2 ${className}`}>{children}</div>
}

Item.ItemImage = function ItemImage({
  src,
  alt,
  className
}: {
  src: string
  alt: string
  className: string
}) {
  return (
    <Image
      className={`w-3 h-3 md:w-5 md:h-5 ${className}`}
      src={src}
      width={20}
      height={20}
      alt={`${alt} icon`}
    />
  )
}

Item.Text = function Text({
  children,
  className
}: {
  children: React.ReactNode
  className: string
}) {
  return <p className={`text-center text-sm md:text-base ${className}`}>{children}</p>
}

export { Item }
