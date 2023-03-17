import { CorrectionsProvider } from "@/contexts/CorrectionsContext"
import { ValueProvider } from "@/contexts/ValueContext"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ValueProvider>
      <CorrectionsProvider>
        <Component {...pageProps} />
      </CorrectionsProvider>
    </ValueProvider>
  )
}
