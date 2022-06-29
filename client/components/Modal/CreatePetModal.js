import axios from 'axios'
import Modal from './Modal'
import ModalBody from './ModalBody'
import ModalHeader from './ModalHeader'
import { Context } from '../../context'
import React, { useEffect, useState } from 'react' 
import { useContext } from 'react'


export default function CreatePetModal(props) {
  const { state, dispatch } = useContext(Context)
  const onSubmit = (event) => {
    event.preventDefault(event)
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
    
  //   .then(dispatch({
  //     type: "PET CREATION",
  //     payload: response.data,
  // }))
  }
  useEffect(() => {
    console.log("PET STATE: ", state)
  },[])
  return (
    <Modal>
      <div className="float-right justify-center">
        <button
          aria-label="Close Modal"
          aria-labelledby="close-modal"
          onClick={props.close}
          className="btn btn-primary"
        >
          <span id="close-modal" className="_hide-visual">
            Close
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="m-3 h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <ModalHeader>
        <h3 className="mx-auto  flex justify-center">Create Pet</h3>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="name"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="age"
            >
              Age
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="age"
              type="text"
              name="age"
              placeholder="Age"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="breed"
            >
              Breed
            </label>
            <div className="relative inline-block w-64">
              <select
                className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
                name="breed"
              >
                <option value="option-1">
                  Really long option that will likely overlap the chevron
                </option>
                <option value="Husky">Husky</option>
                <option value="Spanish water dog">Spanish water dog</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="avatar"
            >
              Choose a profile picture:
            </label>
            <input
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="avatar"
              type="file"
              name="avatar"
              accept="image/png, image/jpeg"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline mx-auto rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Create Pet Profile
            </button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  )
}
