import Image from 'next/image'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";
 

export default function Login() {
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const initialValues = {
    username: "",
    password: "",
  };
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
  const handleSubmit = (formValue) => {
    const { username, password } = formValue;
    console.log("FORM VALUES: ", username, password)
    setSuccessful(false);
    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
        window.location.replace('/');
      })
      .catch(() => {
        setSuccessful(false);
      })
       
  };

  return (
      <div className="relative mx-auto  max-w-xl bg-white text-left shadow-md sm:rounded-lg">
        <div className="justify-center container mx-auto flex flex-col">
          <h1 className="p-6 text-center title">Login</h1>
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
          onSubmit={handleSubmit}
        >
         {({ resetForm }) => (
            <Form className="py-6 px-8">
              <div>
                <label htmlFor="username" className="block font-semibold"> Username </label>
                <Field name="username" type="text" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md" />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mt-5">
                <label htmlFor="password" className="block font-semibold"> Password </label>
                <Field
                  name="password"
                  type="password"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-6 w-full rounded-lg">
                  Login
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn btn-warning float-right"
                >
                  Reset
                </button>
              </div>
            </Form>
          )}
      </Formik>
      </div>
  );
}
