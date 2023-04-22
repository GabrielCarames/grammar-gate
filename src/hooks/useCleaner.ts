import { useBoundStore } from "@/zustand/useBoundStore"
import { useEffect } from "react"

export const useCleaner = () => {
  const { clearCorrections, clearSummary, clearValue, clearTranslation } = useBoundStore()

  useEffect(() => {
    clearCorrections()
    clearSummary()
    clearValue()
    clearTranslation()
  }, [])
}
