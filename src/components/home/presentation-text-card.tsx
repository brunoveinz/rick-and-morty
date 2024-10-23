
type PresentationProps = {
  title: string
  text: string
}

export default function PresentationTextCard({ title, text }: PresentationProps) {
  return (
    <div className="max-w-sm shadow-lg rounded-lg">
      <div className="px-6 py-4">
        <div className="text-center">
          <h2 className="font-rick text-4xl mb-2 text-white">{title}</h2>
        </div>
        <p className="text-white text-base font-rick">{text}</p>
      </div>
    </div>
  )
}