import Image from 'next/image'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from "../styles/Home.module.css";
import * as Yup from "yup";
import LoginModal from '../components/Modal/LoginModal';
import ModalService from '../components/Modal/services/ModalService';
import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";
import SignUpModal from '../components/Modal/SignUpModal';
 

export default function Login() {
  const addModal = (modal) => {
    ModalService.open(modal);
  };

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

  return (
    <div>
 
    <main className={styles.main}>
      <div className="w-full h-screen">
      <div className="w-full h-5/6 p-12 flex flex-col items-center bg-silver-chalice">
        <h1>Choose the plan that's right for you.</h1>
        
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">Kickstarter Actually Pinterest Brunch Bitters Occupy</h2>
    <div class="md:w-3/5 md:pl-6">
      <p class="leading-relaxed text-base">Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.</p>
      <div class="flex flex-col md:mt-4 mt-6">
      <a
                  onClick={() => addModal(LoginModal) }
                  className="justify-center inline-flex text-white bg-orange-500 mb-4 rounded-full border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded w-72"
                ><span className="">Login</span></a>
                <a
                  onClick={ () => addModal(SignUpModal) }
                  className="justify-center inline-flex text-white bg-orange-500 rounded-full border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded w-72"
                ><span className="">Sign up</span></a>
      </div>
    </div>
  </div>
</section>
      </div>
      </div>
    </main>
 
  </div>
  );
}
