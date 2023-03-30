import { ThreeDots } from "react-loader-spinner"

export default function Button({
  onClick,
  disabled,
  loading,
  text,
  type,
  className
}: {
  onClick?: () => void
  disabled: boolean
  loading: boolean
  text: string
  type: "submit" | "button"
  className?: string
}) {
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
          color="#F9F871"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
      )}
    </button>
  )
}
