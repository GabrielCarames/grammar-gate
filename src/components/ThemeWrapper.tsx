import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null
  return <div className={`${theme === "dark" ? "dark" : "light"}`}>{children}</div>
}
