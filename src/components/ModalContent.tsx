import GrammarCheckerInfo from "../utils/GrammarCheckerInfo.json"

export default function ModalContent() {
  const sections = Object.entries(GrammarCheckerInfo)

  return (
    <div className="flex flex-col gap-5 h-full">
      <h2 className="text-lg font-bold">Grammar Checker</h2>
      <ul className="flex flex-col gap-5 overflow-y-scroll h-full">
        {sections.map(([key, values]) => (
          <li key={key}>
            <h3 className="text-lg font-semibold text-pink-300">{key}</h3>
            <ul className="flex flex-col gap-2">
              {values.map((value, index) => (
                <li key={index}>
                  <p className="text-white">{value}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
