import { CorrectionsProvider } from "@/contexts/CorrectionsContext"
import { ValueProvider } from "@/contexts/ValueContext"
import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "@/styles/globals.css"
import { SummaryProvider } from "@/contexts/SummaryContext"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ValueProvider>
      <SummaryProvider>
        <CorrectionsProvider>
          <ToastContainer />
          <Component {...pageProps} />
        </CorrectionsProvider>
      </SummaryProvider>
    </ValueProvider>
  )
}
