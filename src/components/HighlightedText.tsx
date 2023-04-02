export default function HighlightedText({ children }: { children: React.ReactNode }) {
  return <span className="bg-pink-1 pointer-events-auto">{children}</span>
}
