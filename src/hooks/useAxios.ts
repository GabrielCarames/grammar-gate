import { ChatGPTJSON_dataProps, MakeRequestProps } from "@/interfaces"
import { NotificationFailure, NotificationWarning } from "@/utils/toastNotifications"
import { useBoundStore } from "@/zustand/useBoundStore"
import axios, { AxiosError, AxiosHeaders } from "axios"
import { useState } from "react"

const useAxios = () => {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<AxiosError>()
  const { loading, setLoading } = useBoundStore()

  const makeRequest: MakeRequestProps = async (
    url: string,
    payload: ChatGPTJSON_dataProps,
    headers: AxiosHeaders
  ) => {
    setLoading(true)
    const timeout = setTimeout(() => {
      NotificationWarning(
        "Due to the high traffic of the ChatGPT API, the response may take a few seconds."
      )
    }, 10000)
    try {
      const response = await axios.post(url, payload, { headers })
      setData(response.data)
    } catch (error: any) {
      setError(error)
      NotificationFailure("Something went wrong. Please try again later")
    } finally {
      setLoading(false)
      clearTimeout(timeout)
    }
  }

  return { makeRequest, data, error, loading }
}

export default useAxios
