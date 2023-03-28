import { ThreeDots } from "react-loader-spinner"

export default function Button({
  onClick,
  availableData,
  loading,
  text
}: {
  onClick: () => void
  availableData: boolean
  loading: boolean
  text: string
}) {
  return (
    <button
      className={`p-4 py-1 rounded-full text-sm md:text-md font-bold duration-200
        ${availableData ? "!bg-pink-1 hover:!bg-pink-2 !text-white" : "bg-gray-500 text-gray-600"}
        ${availableData && loading ? "!bg-pink-1" : "bg-gray-500 text-gray-600"}
        `}
      onClick={onClick}
      disabled={availableData}
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
