import React, { useContext, useState } from 'react'
import { Context } from '../context'
import { useRouter } from 'next/router'
import { PhoneIcon, ExclamationIcon, ViewGridIcon } from '@heroicons/react/outline';
import { useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import PetCard from '../components/PetCard'
import Footer from '../components/Footer'

function account() {
  const { state } = useContext(Context)
  const router = useRouter()

  // useEffect(() => {
  //   if (!(state.user)) {
  //     router.push('/login')
  //   }
  // }, [])

  return (
    <div className="container-fluid mx-auto">
      <div style={{ marginBottom: "80px" }}>
        <Head>
          <title>Profile</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
      </div>
      <div className='min-h-full'>
      <div className="mt-4 mx-auto grid grid-cols-1 justify-center gap-6 p-11 bg-gray-240 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex justify-center rounded-xl border-2 border-gray-300 bg-gray-100 p-6 text-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1 w-full">
            <div className="bg-gray-100 p-6 text-base">
              <div className='flex justify-end h-2'>
                <button className="text-base hover:border-2 hover:text-orange-500 h-11 font-bold py-2 px-4 rounded">
                  Edit
                </button></div>
              <p className="text-lg font-bold">Markice Dwayne</p>
              <p>788 Inglewood Blvd</p>
              <p>Toronto, Canada</p>
              <p>652-333-4553</p>
              <p>markice@gmail.com</p>
              <p>Premium</p>
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
              <PetCard title="Buster" image={require('/assets/default_pet_profile.png')} description="French Bulldog" />
              <PetCard title="Noah" image={require('/assets/default_pet_profile2.jpg')} description="Golden Retriever" />
          </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default account
