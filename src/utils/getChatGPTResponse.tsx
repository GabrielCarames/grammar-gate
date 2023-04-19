import { NotificationFailure } from "./toastNotifications"

export const getChatGPTResponse = (data: any) => {
  try {
    return JSON.parse(data.choices[0].message.content)
  } catch {
    NotificationFailure("Something went wrong, please try again later")
  }
}
