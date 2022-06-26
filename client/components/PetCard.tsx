import React from 'react'
import Image from 'next/image'
import { DotsHorizontalIcon } from '@heroicons/react/outline';
import Dropdown from '../components/Dropdown';

type CardProps = {
    title: string,
    image: string,
    description: string,
  }

  function toggleOption() {
    console.log("options pressed");
  }

function PetCard({ image, title, description }: CardProps) {
  return (
    <div className="rounded-xl border-2 border-gray-300 bg-gray-100 p-6 text-6xl"> 
   <Dropdown />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 justify-center p-5 rounded-xl">
              <div><Image
                src={image}
                alt="Vercel Logo"
                width={72}
                height={76}
              />
            <h2 className="font-semibold text-xl">{title}</h2> 
            <h4 className="text-xl">{description}</h4></div>
        </div>        
    </div>
  )
}

export default PetCard