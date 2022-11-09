import Modal from './Modal';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import { editPet } from '../../slices/auth';
import { useDispatch } from 'react-redux';
import React from 'react';

export default function EditPetModal(props) {
  const dispatch = useDispatch();

  function closeModal(){
    console.log("Close this bitch")
  }

  console.log("Edit Pets Props: ", props)
  
  const onSubmit = (event) => {
    event.preventDefault(event)

    let target = "Baxter"
  // Logic for communicating with server to Edit pet
  let id = "63659373f93844d88e158c9e";
    let username = JSON.parse(localStorage.getItem("user")) 
 
    let new_name = event.target.new_name.value
   // console.log("Edit Pet target: ", target);
    dispatch(editPet({new_name, target, username, id})) 
  }

  return (
    <Modal>
      <div className="float-right justify-center">
        <button
          aria-label="Close Modal"
          aria-labelledby="close-modal"
          onClick={closeModal}
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
        <h3 className="mx-auto  flex justify-center">Edit Pet</h3>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="new_name"
            >
              Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="new_name"
              type="text"
              name="new_name"
              placeholder="Name"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline mx-auto rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Save Edit
            </button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  )
}
