import { CorrectionsProps } from "@/interfaces"
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

interface CorrectionsContextProps {
  corrections: CorrectionsProps
  setCorrections: Dispatch<SetStateAction<CorrectionsProps>>
}

const initialState = {
  corrections: [],
  textCorrected: ""
}

const CorrectionsContext = createContext<CorrectionsContextProps>({
  corrections: initialState,
  setCorrections: () => {}
})

const CorrectionsProvider = ({ children }: { children: React.ReactNode }) => {
  const [corrections, setCorrections] = useState<CorrectionsProps>(initialState)
  return (
    <CorrectionsContext.Provider value={{ corrections, setCorrections }}>
      {children}
    </CorrectionsContext.Provider>
  )
}

const useCorrectionsContext = () => useContext(CorrectionsContext)

export { CorrectionsProvider, useCorrectionsContext }
