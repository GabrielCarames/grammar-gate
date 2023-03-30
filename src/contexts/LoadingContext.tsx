import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

interface ValueContextProps {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}

const LoadingContext = createContext<ValueContextProps>({
  loading: false,
  setLoading: () => {}
})

const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false)
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>{children}</LoadingContext.Provider>
  )
}

const useLoadingContext = () => useContext(LoadingContext)

export { LoadingProvider, useLoadingContext }
