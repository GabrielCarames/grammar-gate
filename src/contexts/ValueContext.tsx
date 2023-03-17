import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

interface ValueContextProps {
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

const ValueContextContext = createContext<ValueContextProps>({
  value: "",
  setValue: () => {}
})

const ValueProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState("")
  return (
    <ValueContextContext.Provider value={{ value, setValue }}>
      {children}
    </ValueContextContext.Provider>
  )
}

const useValueContext = () => useContext(ValueContextContext)

export { ValueProvider, useValueContext }
