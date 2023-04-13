import { type FC, useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface ThemeWrapperProps {
  children: React.ReactNode
}

const ThemeWrapper: FC<ThemeWrapperProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return <div className={`${theme === "dark" ? "dark" : "light"}`}>{children}</div>
}

export default ThemeWrapper
