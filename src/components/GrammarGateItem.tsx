import Link from "next/link"
import { type FC } from "react"

interface ItemLinkProps {
  href: string
  className: string
  children: React.ReactNode
}

interface ItemProps {
  children: React.ReactNode
  className: string
}

interface ImageWrapperProps {
  children: React.ReactNode
  className: string
}

interface TextProps {
  children: React.ReactNode
  className: string
}

const Item: FC<ItemProps> & {
  ItemLink: FC<ItemLinkProps>
  ImageWrapper: FC<ImageWrapperProps>
  Text: FC<TextProps>
} = ({ children, className }) => (
  <li
    className={`h-full rounded-md dark:duration-0 text-text-gray dark:text-white hover:bg-white-2 dark:hover:bg-gray-3 duration-150 ${className}`}
  >
    {children}
  </li>
)

const ItemLink: FC<ItemLinkProps> = ({ href, className, children }) => (
  <Link href={href} className={className}>
    {children}
  </Link>
)

const ImageWrapper: FC<ImageWrapperProps> = ({ children, className }) => (
  <div className={`rounded-full p-2 ${className}`}>{children}</div>
)

const Text: FC<TextProps> = ({ children, className }) => (
  <p className={`text-center text-sm md:text-base ${className}`}>{children}</p>
)

Item.ItemLink = ItemLink
Item.ImageWrapper = ImageWrapper
Item.Text = Text

export { Item }
