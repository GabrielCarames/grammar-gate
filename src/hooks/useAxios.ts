import axios from "axios"
import { useState } from "react"

const useAxios = () => {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  const makeRequest = async (url: string, payload: any, headers: any) => {
    setLoading(true)
    try {
      const response = await axios.post(url, payload, { headers })
      setData(response.data)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { makeRequest, data, error, loading }
}

export default useAxios
