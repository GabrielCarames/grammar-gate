import { useCorrectionsContext } from "@/contexts/CorrectionsContext"
import { useValueContext } from "@/contexts/ValueContext"
import { ThreeDots } from "react-loader-spinner"

export default function TextareaFooter({ loading }: { loading: boolean }) {
  const { value, setValue } = useValueContext()
  const { corrections, setCorrections } = useCorrectionsContext()

  const wordsCount = () => (value?.split(" ").length >= 1 ? value?.split(" ").length : "0")
  const correctionsCount = () =>
    corrections?.corrections?.length >= 1 ? corrections?.corrections?.length : "0"
  const fixEverything = () => {
    setValue(corrections.textCorrected)
    setCorrections({ ...corrections, corrections: [] })
  }

  return (
    <div className="w-full h-12 flex justify-between items-center px-5 text-sm md:text-md">
      <p className="w-min md:w-auto flex flex-wrap gap-x-1 justify-center items-center">
        <span className="text-yellow-1">{wordsCount()}</span> Words
      </p>
      <button
        className={`p-4 py-1 rounded-full text-sm md:text-md font-bold duration-200
        ${
          corrections.corrections.length >= 1
            ? "!bg-pink-1 hover:!bg-pink-2 !text-white"
            : "bg-gray-500 text-gray-600"
        }
        ${
          corrections.corrections.length <= 0 && loading
            ? "!bg-pink-1"
            : "bg-gray-500 text-gray-600"
        }
        `}
        onClick={fixEverything}
        disabled={corrections.corrections.length <= 0}
      >
        {!loading ? (
          <span className={``}>Fix everything</span>
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
      <p className="w-min md:w-auto flex flex-wrap gap-x-1 justify-center items-center">
        <span className="text-red-500 text-center">{correctionsCount()}</span> Mistakes
      </p>
    </div>
  )
}
