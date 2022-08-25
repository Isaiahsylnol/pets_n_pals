import Head from 'next/head';
import Header from '../components/Header.js';
import Footer from '../components/Footer';
import PetCard from '../components/PetCard.js';
import { useSelector } from "react-redux";
import CreatePetModal from '../components/Modal/CreatePetModal';
import ModalService from '../components/Modal/services/ModalService';
import {
  PhoneIcon,
  ExclamationIcon,
  ViewGridIcon,
} from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'

export default function Profile() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [user, setUser] = useState()

  const addModal = (modal) => {
    ModalService.open(modal)
  }

  useEffect(()=> {
    setUser(currentUser)
    console.log("USER'S PETS: ", currentUser)
  },[currentUser])
  if(user){
    return (
        <div className="container-fluid mx-auto">
          <div style={{ marginBottom: '80px' }}>
            <Head>
              <title>Profile</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
          </div>
          <div className="min-h-screen">
            <div className="bg-gray-240 mx-auto mt-4 grid grid-cols-1 justify-center gap-6 p-11 md:grid-cols-2 lg:grid-cols-2">
              <div className="flex justify-center rounded-xl border-2 border-gray-300 bg-gray-100 p-6 text-6xl">
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
                  <div className="bg-gray-100 p-6 text-base">
                    <div className="flex h-2 justify-end">
                      <button className="h-11 rounded py-2 px-4 text-base font-bold hover:border-2 hover:text-orange-500">
                        Edit
                      </button>
                    </div>
                    <p className="text-lg font-bold">{user?.username}</p>
                    <p>{user?.address}</p>
                    <p>Toronto, Canada</p>
                    <p>652-333-4553</p>
                    <p>{user.email}</p>
                    <p>{user.account_type}</p>
                    <div className="mt-10 grid grid-cols-1 gap-y-3 text-base">
                      <button className="flex h-10 w-36 justify-start rounded bg-yellow-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                        <PhoneIcon className="inline h-6 w-6" />
                        <a className="ml-3">Support</a>
                      </button>
                      <br />
                      <button className="flex h-10 w-44 justify-start rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                        <ViewGridIcon className="inline h-6 w-6" />
                        <a className="ml-3 justify-start">Manage Plan</a>
                      </button>
                      <br />
                      <button className="flex h-10 w-36 justify-start rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                        <ExclamationIcon className="inline h-6 w-6" />
                        <a className="ml-3 justify-start">Deactivate</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* grid nested  */}
              <div className="grid grid-cols-1 gap-6 sm:w-full md:w-full md:grid-cols-1 lg:w-8/12 lg:grid-cols-1">
                <button
                  onClick={() => addModal(CreatePetModal)}
                  className="btn btn-primary m-4"
                >
                  Create Pet
                </button>
                {user?.pets?.map((item) => {
              return (
                <li key={item?._id} style={{ listStyle: 'none' }}>
                  {
                    <PetCard
                    userId={user?.id}
                      title={item?.name}
                      image={require('/assets/default_pet_profile.png')}
                      description={item?.breed}
                    />
                  }
                </li>
              )
            })}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )
  }
}
