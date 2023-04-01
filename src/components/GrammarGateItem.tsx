import Link from "next/link"

const Item = ({ children, className }: { children: React.ReactNode; className: string }) => {
  return (
    <li
      className={`h-full rounded-md dark:duration-0 text-gray-1 dark:text-white hover:bg-white-2 dark:hover:bg-gray-3 duration-150 ${className}`}
    >
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
