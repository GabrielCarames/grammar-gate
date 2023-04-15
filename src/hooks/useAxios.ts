import { ChatGPTJSON_dataProps, MakeRequestProps } from "@/interfaces"
import { NotificationFailure, NotificationWarning } from "@/utils/toastNotifications"
import { useBoundStore } from "@/zustand/useBoundStore"
import axios, { AxiosHeaders } from "axios"
import { useState } from "react"

const useAxios = () => {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState("")
  const { loading, setLoading } = useBoundStore()

  const makeRequest: MakeRequestProps = async (
    url: string,
    payload: ChatGPTJSON_dataProps,
    headers: AxiosHeaders
  ) => {
    setLoading(true)
    try {
      const timeout = setTimeout(() => {
        NotificationWarning(
          "Due to the high traffic of the ChatGPT API, the response may take a few seconds."
        )
      }, 10000)
      const response = await axios.post(url, payload, { headers })
      clearTimeout(timeout)
      setData(response.data)
    } catch (error: any) {
      setError(error.message)
      NotificationFailure("Something went wrong. Please try again later")
    } finally {
      setLoading(false)
    }
  }

  return { makeRequest, data, error, loading }
}

export default useAxios
