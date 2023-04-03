import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import { ThemeProvider } from "next-themes"
import ThemeWrapper from "@/components/ThemeWrapper"
import HeadWrapper from "@/components/HeadWrapper"
import "react-toastify/dist/ReactToastify.css"
import "@/styles/globals.css"
import { useBoundStore } from "@/zustand/useBoundStore"
import { useEffect } from "react"

export default function App({ Component, pageProps }: AppProps) {
  const { clearCorrections, clearSummary, clearValue } = useBoundStore()

  useEffect(() => {
    clearCorrections()
    clearSummary()
    clearValue()
  }, [])

  return (
    <HeadWrapper>
      <ThemeProvider>
        <ThemeWrapper>
          <ToastContainer limit={2} />
          <Component {...pageProps} />
        </ThemeWrapper>
      </ThemeProvider>
    </HeadWrapper>
  )
}
