import axios from 'axios';
import Modal from './Modal';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPet } from '../../slices/pets';
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { clearMessage } from "../../slices/message";
import CustomSelect from '../CustomSelect';

export default function CreatePetModal(props) {
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);

  const initialValues = {
    name: "",
    age: "",
    breed: "",
    weight: "",
  };
  const options = [
    { value: 'husky', label: 'Husky' },
    { value: 'doberman', label: 'Doberman' },
    { value: 'shitzu', label: 'Shitzu' },
    { value: 'weiner', label: 'Weiner' }
  
  ]

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .test(
        "len",
        "The name must be between 3 and 20 characters.",
        (val) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required("This field is required!"),
      weight: Yup.number()
      .test(
        "len",
        "The weight must be between 1lbs and 230lbs.",
        (val) =>
          val &&
          val >= 1 &&
          val <= 230
      )
      .required("This field is required!"),
    age: Yup.number()
      .test(
        "len",
        "The age must be between 1 and 40.",
        (val) =>
          val &&
          val >= 1 &&
          val <= 40
      )
      .required("This field is required!"),
  });

  const validate = values => {
    const errors = {}

    if (!values.name) {
      errors.name = 'Required'
    }

    if (!values.age) {
      errors.age = 'Required'
    }

    if (!values.weight) {
      errors.weight = 'Required'
    }

    if(!values.breed){
      errors.breed='Required'
    }

    return errors
  }

  const formik = useFormik({

    initialValues: {
      name: '',
      age: '',
      weight: '',
      breed: ''
    },
    validate,
    onSubmit: values => {
      const { name, age, breed, weight } = values
 let userId = currentUser.id
     dispatch(createPet({name, age, breed, weight, userId})).then(window.location.reload())
    
    }
  })
  
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
      <form onSubmit={formik.handleSubmit}>      
      <div>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        className='input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}/>
      {formik.touched.name && formik.errors.name ? ( <div className='text-red-500 text-xs italic'>{formik.errors.name}</div>) : null}
      </div>
      <div>
      <label htmlFor="age">Age</label>
      <input
        id="age"
        name="age"
        type="number"
        className='input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        onChange={formik.handleChange}
        value={formik.values.age}/>
      {formik.touched.age && formik.errors.age ? (
         <div className='text-red-500 text-xs italic'>{formik.errors.age}</div>
       ) : null}
      </div>
      <div>
      <label htmlFor="weight">Weight</label>
      <input
        id="weight"
        name="weight"
        type="number"
        className='input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.weight}/>
      {formik.touched.weight && formik.errors.weight ? (
         <div className='text-red-500 text-xs italic'>{formik.errors.weight}</div>
       ) : null}
      </div>
      <label htmlFor="breed">Breed</label>

      <CustomSelect
        className='input'
        onChange={value=>formik.setFieldValue('breed',value.value)}
        onBlur={formik.handleBlur}
        value={formik.values.job}
        options={options}
        />
      {formik.touched.breed && formik.errors.breed ? (
         <div className='text-red-500 text-xs italic'>{formik.errors.breed}</div>
       ) : null}

      <button type="submit">Register</button>

    </form>
      </ModalBody>
    </Modal>
  )
}
