import React from 'react'
import Image from 'next/image'

type CardProps = {
    title: string,
    image: string,
    description: string,
  }

function PetCard({ image, title, description }: CardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 w-full">
        <div className="justify-center rounded-xl bg-gray-100 ">
              <Image
                src={image}
                alt="Vercel Logo"
                width={72}
                height={76}
              />
            <h2 className="font-semibold text-xl">{title}</h2> 
            <h4 className="text-xl">{description}</h4>
        </div>
    </div>
  )
}

export default PetCard