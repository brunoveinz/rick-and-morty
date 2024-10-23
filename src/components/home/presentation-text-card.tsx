
type PresentationProps = {
  title: string
  text: string
}

export default function PresentationTextCard({ title, text }: PresentationProps) {
  return (
    <div className="max-w-sm shadow-lg rounded-lg">
      <div className="px-6 py-4">
        <div className="text-center">
          <h2 className="font-rick text-5xl mb-2 text-white">{title}</h2>
        </div>
        <div className="mt-5">
          <p className="text-white text-2xl text-base font-rick text-portalGreen text-center">{text}</p>
        </div>
      </div>
    </div>
  )
}