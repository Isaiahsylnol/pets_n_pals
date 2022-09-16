import Image from 'next/image'
import Modal from "./Modal";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";
import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { clearMessage } from "../../slices/message";

export default function SignUpModal(props) {
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
 
  // Population of the pet breed select tag's options 

  const initialValues = {
    username: "",
    password: "",
  };
  useEffect(()=> {
    console.log(props);
  },[]);
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 7 and 40 characters.",
        (val) =>
          val &&
          val.toString().length >= 7 &&
          val.toString().length <= 40
      )
      .required("This field is required!"),
  });

  const handleRegister = (formValue) => {
    const { username, email, password } = formValue;
    setSuccessful(false);
    dispatch(register({ username, email, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

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
        <h1 className="mx-auto flex justify-center title">Sign up</h1>
      </ModalHeader>
      <ModalBody>
      <div className="mx-auto max-w-xl text-left sm:rounded-lg">
      <div className="justify-center container mx-auto flex flex-col">
          <Image
            className="mx-auto object-contain"
            alt="Food Image"
            width={300}
            height={300}
            src={require('/assets/logo2.png')}
          />
          </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          {({ resetForm }) => (
          <Form className="py-6 px-8">
            {!successful && (
              <div>
                <div className="form-group">
                <label htmlFor="username" className="block font-semibold"> Username </label>
                <Field name="username" type="text" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md" />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group">
                <label htmlFor="email" className="block font-semibold"> Email </label>
                <Field name="email" type="text" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group">
                <label htmlFor="password" className="block font-semibold"> Password </label>
                <Field name="password" type="password" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md" />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group">
                <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-6 w-full rounded-lg">
                  Sign Up
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="p-6 float-right">
                  Reset
                </button>
                </div>
              </div>
            )}
          </Form>
)}
        </Formik>
      
      {message && (
        <div className="form-group">
          <div
            className={successful ? "alert alert-success" : "alert alert-danger"}
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
    </div>
      </ModalBody>
    </Modal>
  );
}
