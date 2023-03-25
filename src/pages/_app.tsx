import { CorrectionsProvider } from "@/contexts/CorrectionsContext"
import { ValueProvider } from "@/contexts/ValueContext"
import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ValueProvider>
      <CorrectionsProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </CorrectionsProvider>
    </ValueProvider>
  )
}
