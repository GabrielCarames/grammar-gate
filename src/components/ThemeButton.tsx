import { useTheme } from "next-themes"
import SunIcon from "../../public/sun-icon.svg"
import MoonIcon from "../../public/moon-icon.svg"
import IconWrapper from "./IconWrapper"

export default function ThemeButton({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className={`w-[40px] sm:hidden flex justify-center items-center bg-gray-1 dark:bg-white-2 dark:text-white rounded-[10px] p-3 box-border ${className}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <IconWrapper
        icon={theme === "dark" ? <SunIcon /> : <MoonIcon />}
        className="min-w-[15px]"
        fill={`${theme === "dark" ? "!fill-black" : "!fill-white"}`}
        alt="Toggle dark mode"
      />
    </button>
  )
}
