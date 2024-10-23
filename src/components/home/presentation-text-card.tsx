
type PresentationProps = {
  title: string
  text: string
}

export default function PresentationTextCard({ title, text }: PresentationProps) {
  return (
    <div className="max-w-sm bg-green-500 shadow-lg rounded-lg">
      <div className="px-6 py-4">
        <div className="text-center">
          <h2 className="font-bold text-2xl mb-2 text-black">{title}</h2>
        </div>
        <p className="text-black text-base">{text}</p>
      </div>
    </div>
  )
}