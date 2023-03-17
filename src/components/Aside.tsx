export default function Aside({
  corrections,
  setValue,
  setCorrections
}: {
  corrections: any
  setValue: any
  setCorrections: any
}) {
  console.log(corrections)

  const handleCorrection = (correction: any) => {
    setValue((prev: string) => {
      const [before, after] = prev.split(correction.result[0])
      return `${before}${correction.result[1]}${after}`
    })
    setCorrections((prev: any) => prev.filter((c: any) => c.id !== correction.id))
  }

  return (
    <aside className="w-80 bg-gray-1 p-5">
      <h2 className="text-lg mb-10">General corrections</h2>
      {corrections?.length === 0 && (
        <p className="text-center">No corrections available. Well done!</p>
      )}
      <ul className="flex flex-col gap-10">
        {corrections?.map((correction: any) => (
          <li className="flex flex-col gap-2" key={correction.id}>
            <p>{correction.type}</p>
            <p>{correction.explanation}</p>
            <div className="flex gap-5">
              <p className="line-through text-red-500">{correction.result[0]}</p>
              <p className="text-green-500">{correction.result[1]}</p>
            </div>
            <button className="bg-orange-2" onClick={() => handleCorrection(correction)}>
              Correct
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
