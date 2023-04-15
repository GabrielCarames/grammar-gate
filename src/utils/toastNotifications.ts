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

export const NotificationSuccess = (text: string) => toast.success(text, toastConfig)

export const NotificationFailure = (text: string) => toast.error(text, toastConfig)

export const NotificationWarning = (text: string) => toast.warning(text, toastConfig)
