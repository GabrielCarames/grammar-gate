export default function HighlightedText({ children }: { children: any }) {
  return (
    <span className="bg-pink-1 text-white caret-white pointer-events-auto hover:bg-red-600">
      {children}
    </span>
  )
}
