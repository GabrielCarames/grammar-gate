import { type ToastContainerProps, toast } from "react-toastify"

const toastConfig: ToastContainerProps = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored"
}

export const NotificationSuccess = (text: string) => {
  return toast.success(text, toastConfig)
}

export const NotificationFailure = (text: string) => {
  return toast.error(text, toastConfig)
}

export const NotificationWarning = (text: string) => {
  return toast.warning(text, toastConfig)
}
