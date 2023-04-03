import ThemeButton from "./ThemeButton"
import Logo from "./Logo"
import NavbarLinks from "./NavbarLinks"

export default function Navbar() {
  return (
    <section className="w-full h-max bg-white dark:bg-gray-1 border-r dark:border-r-gray-2 mb-5 2xl:mb-0 shadow-md">
      <div className="w-full h-full flex flex-wrap lg:flex-row md:flex-nowrap items-center justify-center lg:justify-start md:px-5">
        <Logo />
        <NavbarLinks />
        <ThemeButton className="!hidden md:!flex" />
      </div>
    </section>
  )
}
