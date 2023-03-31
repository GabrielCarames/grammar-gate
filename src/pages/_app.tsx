import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import { CorrectionsProvider } from "@/contexts/CorrectionsContext"
import { SummaryProvider } from "@/contexts/SummaryContext"
import { LoadingProvider } from "@/contexts/LoadingContext"
import { ValueProvider } from "@/contexts/ValueContext"
import "react-toastify/dist/ReactToastify.css"
import "@/styles/globals.css"
import { ThemeProvider } from "next-themes"
import ThemeWrapper from "@/components/ThemeWrapper"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <ValueProvider>
          <SummaryProvider>
            <CorrectionsProvider>
              <ThemeWrapper>
                <ToastContainer />
                <Component {...pageProps} />
              </ThemeWrapper>
            </CorrectionsProvider>
          </SummaryProvider>
        </ValueProvider>
      </LoadingProvider>
    </ThemeProvider>
  )
}
