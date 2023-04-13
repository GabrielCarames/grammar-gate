import { type FC } from "react"
import { ThreeDots } from "react-loader-spinner"

interface ButtonProps {
  onClick?: () => void
  disabled: boolean
  loading: boolean
  text: string
  type: "submit" | "button"
  className?: string
}

const Button: FC<ButtonProps> = ({ onClick, disabled, loading, text, type, className }) => {
  return (
    <button
      className={`p-4 py-1 rounded-full text-sm md:text-md font-bold duration-200 bg-pink-1
        ${className}
        `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {!loading ? (
        <span>{text}</span>
      ) : (
        <ThreeDots
          height="24"
          width="50"
          radius="9"
          color="#FFF056"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
      )}
    </button>
  )
}

export default Button
