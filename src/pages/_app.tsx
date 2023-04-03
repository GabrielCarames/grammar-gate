import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import { SummaryProvider } from "@/contexts/SummaryContext"
import { LoadingProvider } from "@/contexts/LoadingContext"
import ThemeWrapper from "@/components/ThemeWrapper"
import { ThemeProvider } from "next-themes"
import "react-toastify/dist/ReactToastify.css"
import "@/styles/globals.css"
import HeadWrapper from "@/components/HeadWrapper"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeadWrapper>
      <ThemeProvider>
        <LoadingProvider>
          <SummaryProvider>
            <ThemeWrapper>
              <ToastContainer limit={2} />
              <Component {...pageProps} />
            </ThemeWrapper>
          </SummaryProvider>
        </LoadingProvider>
      </ThemeProvider>
    </HeadWrapper>
  )
}
