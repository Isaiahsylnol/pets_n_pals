import React from 'react'
import Image from 'next/image'
import { DotsHorizontalIcon } from '@heroicons/react/outline';
import Dropdown from '../components/Dropdown';


function PetCard({ userId, image, name, description }) {
  const handleInputChange = event => {
    const { name, value } = event.target;
    console.log({ [name]: value });
  };

  return (
    <div className="rounded-xl border-2 border-gray-300 bg-gray-100 p-6 text-6xl"> 
   <Dropdown id={userId} name={name} />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 justify-center p-5 rounded-xl">
              <div><Image
                src={image}
                alt="Vercel Logo"
                width={72}
                height={76}
              />
            <h2 className="font-semibold text-xl">{name}</h2> 
            <h4 className="text-xl">{description}</h4></div>
            <input
                type="text"
                className="text-xl"
                id="name"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
        </div>        
    </div>
  )
}

export default PetCard