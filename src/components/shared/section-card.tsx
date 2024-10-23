import Image from "next/image"
import Button from "./buttons/button"
import Link from "next/link"

type SectionProps = {
    image: string
    title: string
    url: string
  }
  
  export default function SectionCard({ image, title, url }: SectionProps) {
    return (
    <div className="mt-10">
        <Link href={url}>
            <div className="container rounded-lg w-1/2 p-8 flex flex-col items-center">
                <h1 className="text-4xl text-portalGreen font-rick mb-2 ">{title}</h1>
                <Image
                src={image}
                alt="section"
                width={300}
                height={300}
                className="rounded-xl"
                />
                <div className="mt-2">
                    <Button title={title} color='green' />
                </div>
            </div>
        </Link>
    </div>
    )
  }