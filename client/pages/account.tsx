import React, { useEffect, useState, useContext } from 'react'
import type { NextPage } from 'next'
import { PhoneIcon, ExclamationIcon, ViewGridIcon } from '@heroicons/react/outline';
import Head from 'next/head'
import Header from '../components/Header'
import PetCard from '../components/PetCard'
import Footer from '../components/Footer'  
import Container from '../components/Modal/Container' 
import axios from 'axios';
import { Context } from '../context/index'

const Account: NextPage = () => { 
  const { state } = useContext(Context)
  const [pets, setPets] = useState([])
  const triggerText = 'Add Pet';

  useEffect(() => {  
    setPets(state?.user?.pets) 
  },[state])

  const onSubmit = (event) => {
    event.preventDefault(event);  
    let name = event.target.name.value
    let age = event.target.age.value
    let breed = event.target.breed.value
    let avatar = event.target.avatar.value 
 
    axios.post("http://localhost:8000/api/auth/add-pet", 
    {
      name, 
      age,
      breed,
      avatar,  
    })
  };

  return (
    <div className="container-fluid mx-auto">
      <div style={{ marginBottom: "80px" }}>
        <Head>
          <title>Profile</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
      </div>
      <div className="min-h-screen"> 
      <div className="mt-4 mx-auto grid grid-cols-1 justify-center gap-6 p-11 bg-gray-240 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex justify-center rounded-xl border-2 border-gray-300 bg-gray-100 p-6 text-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1 w-full">
            <div className="bg-gray-100 p-6 text-base">
              <div className='flex justify-end h-2'>
                <button className="text-base hover:border-2 hover:text-orange-500 h-11 font-bold py-2 px-4 rounded">
                  Edit
                </button>
              </div>
              <p className="text-lg font-bold">{ state.user?.name }</p>
              <p>{ state.user?.address }</p>
              <p>Toronto, Canada</p>
              <p>652-333-4553</p>
              <p>{ state.user?.email }</p>
              <p>{ state.user?.account_type }</p>
            </div>
            <div className="p-6 text-base grid grid-cols-2 gap-x-4">
            <button className='bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-10 w-36 rounded flex justify-start'><PhoneIcon className='h-6 w-6 inline'/><a className='ml-3'>Support</a></button><br/>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-10 w-44 rounded flex justify-start'><ViewGridIcon className='h-6 w-6 inline'/><a className='ml-3 justify-start'>Manage Plan</a></button><br />
            <button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-10 w-36 rounded flex justify-start'><ExclamationIcon className='h-6 w-6 inline'/><a className='ml-3 justify-start'>Deactivate</a></button>
            </div>
          </div>
        </div>
          {/* grid nested  */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1 sm:w-full md:w-full lg:w-8/12">
      <Container triggerText={triggerText} onSubmit={onSubmit} />
      { 
      pets?.map(item => {
        return <li key={item?.name} style={{listStyle: "none"}}>{<PetCard title={item?.name} image={require('/assets/default_pet_profile.png')} description={item?.breed} />
      }</li>;
      })}
          </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Account
