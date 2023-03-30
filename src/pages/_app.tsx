import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import { CorrectionsProvider } from "@/contexts/CorrectionsContext"
import { ValueProvider } from "@/contexts/ValueContext"
import { SummaryProvider } from "@/contexts/SummaryContext"
import { LoadingProvider } from "@/contexts/LoadingContext"
import "react-toastify/dist/ReactToastify.css"
import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <ValueProvider>
        <SummaryProvider>
          <CorrectionsProvider>
            <ToastContainer />
            <Component {...pageProps} />
          </CorrectionsProvider>
        </SummaryProvider>
      </ValueProvider>
    </LoadingProvider>
  )
}
