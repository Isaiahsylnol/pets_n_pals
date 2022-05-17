import React, { useContext, useState } from 'react'
import { Context } from '../context'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import PetCard from '../components/PetCard'

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
      <div style={{marginBottom: "80px"}}>
        <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      </div>
      <div className="mt-4 mx-auto grid grid-cols-1 justify-center gap-6 p-11 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex justify-center rounded-xl border-2 border-gray-300 bg-gray-100 p-6 text-6xl">
        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-1 w-full">
             
             <div className="rounded-xl border-2 border-gray-300 bg-gray-100 p-6 text-base">
              <p>Markice Dwayne</p>
              <p>788 Inglewood Blvd</p>
              <p>Toronto, Canada</p>
              <p>652-333-4553</p>
              <p>markice@gmail.com</p>
              <p>Premium</p>
             </div>
             <div className="flex justify-center rounded-xl border-2 border-gray-300 bg-gray-100 p-6 text-6xl">
              
             </div>
            
           </div>
        </div>
        <div className="flex justify-center rounded-xl border-2 border-gray-300 bg-gray-100 p-6">
          {/* grid nested  */}
          <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-1 w-full">
             
            <div className="flex justify-center rounded-xl border-2 border-gray-300 bg-gray-100 p-6 text-6xl">
              <PetCard title="Buster" image={require('/assets/default_pet_profile.png')} description="French Bulldog"/>
            </div>
            <div className="flex justify-center rounded-xl border-2 border-gray-300 bg-gray-100 p-6 text-6xl">
            <PetCard title="Buster" image={require('/assets/default_pet_profile2.jpg')} description="French Bulldog"/>
            </div>
           
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 bg-green-300 p-11 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex justify-center rounded-xl border-2 border-gray-300 bg-gray-100 p-6 text-6xl">
          1
        </div>
        <div className="flex justify-center rounded-xl border-2 border-gray-300 bg-gray-100 p-6 text-6xl">
          2
        </div>
        <div className="flex justify-center rounded-xl border-2 border-gray-300 bg-gray-100 p-6 text-6xl">
          3
        </div>
        <div className="flex justify-center rounded-xl border-2 border-gray-300 bg-gray-100 p-6 text-6xl">
          4
        </div>
      </div>
    </div>
  )
}

export default account
