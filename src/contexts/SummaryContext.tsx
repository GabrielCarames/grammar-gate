import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

interface SummaryContextProps {
  summary: string
  setSummary: Dispatch<SetStateAction<string>>
}

const SummaryContext = createContext<SummaryContextProps>({
  summary: "",
  setSummary: () => {}
})

const SummaryProvider = ({ children }: { children: React.ReactNode }) => {
  const [summary, setSummary] = useState("")
  return (
    <SummaryContext.Provider value={{ summary, setSummary }}>{children}</SummaryContext.Provider>
  )
}

const useSummaryContext = () => useContext(SummaryContext)

export { SummaryProvider, useSummaryContext }
