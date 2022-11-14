import Modal from "./Modal";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { deletePet } from "../../slices/auth";

export default function DeleteConfirmation(props) {
  const dispatch = useDispatch();
  // Referrence to the modal close button 
  // programmatically close the modal once 
  // successfully sign in 
  const close = useRef(null);
  const closeModal = () => {
    close.current.click();
   console.log(close.current);
  }
  
  function deletePetCell(){
    let name = props.name;
    let id = props.id;
    dispatch(
      deletePet({
        name,
        id,
      })
    );
    closeModal();
  }

  return (
    <Modal>
      {/* Close modal button */}
      <div className="float-right justify-center">
        <button
          ref={close}
          aria-label="Close Modal"
          aria-labelledby="close-modal"
          onClick={props.close}
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
      {/* Close modal button - END */}
      <ModalHeader>
        <h1 className="text-center">Delete Pet Confirmation </h1>
      </ModalHeader>
      <ModalBody>
      <div className="bg-white w-96 h-16 text-white">
      <button onClick={deletePetCell} className="float-left ml-4 bg-red-500 p-3">Delete</button>
      <button className="float-right mr-4 bg-slate-500 p-3">Cancel</button>
      </div>
      </ModalBody>
    </Modal>
  );
}
