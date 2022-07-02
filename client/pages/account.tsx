import React, { useEffect, useState, useContext } from 'react'
import type { NextPage } from 'next'
import {
  PhoneIcon,
  ExclamationIcon,
  ViewGridIcon,
} from '@heroicons/react/outline'
import Head from 'next/head'
import Header from '../components/Header'
import PetCard from '../components/PetCard'
import Footer from '../components/Footer'
import axios from 'axios'
import CreatePetModal from '../components/Modal/CreatePetModal'
import { Context } from '../context/index'
import ModalService from '../components/Modal/services/ModalService'

const Account: NextPage = () => {
  const { state, dispatch } = useContext(Context)
  const [pets, setPets] = useState([])

  useEffect(() => {
    console.log(state.user)
    axios
      .post('http://localhost:8000/api/user', {
        email: state?.user?.email,
      })
      .then(function (response) {
        setPets(response.data.pets)
      })
  }, [state])

  const addModal = (modal: any) => {
    ModalService.open(modal)
  }

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
                <p className="text-lg font-bold">{state.user?.name}</p>
                <p>{state.user?.address}</p>
                <p>Toronto, Canada</p>
                <p>652-333-4553</p>
                <p>{state.user?.email}</p>
                <p>{state.user?.account_type}</p>
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
            {pets?.map((item) => {
              return (
                <li key={item?._id} style={{ listStyle: 'none' }}>
                  {
                    <PetCard
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

export default Account
