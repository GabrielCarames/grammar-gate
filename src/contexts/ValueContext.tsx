import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

interface ValueContextProps {
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

const ValueContext = createContext<ValueContextProps>({
  value: "",
  setValue: () => {}
})

const ValueProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState("")
  return <ValueContext.Provider value={{ value, setValue }}>{children}</ValueContext.Provider>
}

const useValueContext = () => useContext(ValueContext)

export { ValueProvider, useValueContext }
