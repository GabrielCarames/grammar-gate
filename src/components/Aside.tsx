export default function Aside({ corrections }: { corrections: any }) {
  console.log(corrections)

  return (
    <aside className="w-80 bg-gray-1 p-5">
      <h2 className="text-lg">General corrections</h2>
      <ul className="mt-10 flex flex-col gap-10">
        {corrections?.map((correction: any) => (
          <li className="flex flex-col gap-2" key={correction.id}>
            <p>{correction.type}</p>
            <p>{correction.explanation}</p>
            <div className="flex gap-5">
              <p className="line-through text-red-500">{correction.result[0]}</p>
              <p className="text-green-500">{correction.result[1]}</p>
            </div>
            <button className="bg-orange-2">Correct</button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
