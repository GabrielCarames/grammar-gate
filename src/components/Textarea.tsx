export default function Textarea({
  value,
  onChange
}: {
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}) {
  return (
    <textarea
      className="w-full min-h-[500px] bg-gray-1 h-max outline-none resize-none p-5 text-lg"
      name="text"
      cols={30}
      rows={10}
      value={value}
      onChange={onChange}
      placeholder="Write your text here..."
    />
  )
}
