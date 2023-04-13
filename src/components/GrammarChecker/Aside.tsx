import type { CorrectionProps } from "@/interfaces"
import Correction from "../Correction"
import { useBoundStore } from "@/zustand/useBoundStore"

const Aside = (): JSX.Element => {
  const { textWithCorrections } = useBoundStore()

  return (
    <aside className="w-full lg:w-96 md:max-h-screen bg-white dark:bg-gray-1 text-gray-1 dark:text-white p-5 shadow-lg">
      <h2 className="text-base lg:text-lg mb-10">General corrections</h2>
      {textWithCorrections?.corrections?.length === 0 && (
        <p className="text-center text-sm lg:text-base text-[#475569] dark:text-white">
          No corrections available. Well done!
        </p>
      )}
      <ul className="h-max lg:h-[calc(100%-100px)] flex flex-col gap-5 overflow-y-auto">
        {textWithCorrections?.corrections?.map((correction: CorrectionProps) => (
          <Correction correction={correction} key={correction.id} />
        ))}
      </ul>
    </aside>
  )
}

export default Aside
