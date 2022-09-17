import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from "../styles/Home.module.css";
import * as Yup from "yup";
import LoginModal from "../components/Modal/SignInModal";
import ModalService from "../components/Modal/services/ModalService";
import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";
import SignUpModal from "../components/Modal/SignUpModal";

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

  return (
    <div>
      <main className={styles.main}>
        <div className="w-full">
          <div className="w-full flex flex-col items-center p-12 bg-silver-chalice">
            <section className="text-gray-600">
              <div className="container px-5 gap-x-52 py-24 flex flex-wrap">
                <Image
                  className="mx-auto object-contain"
                  alt="Logo Image"
                  width={350}
                  height={350}
                  src={require("/assets/logo2.png")}
                />

                <div className="md:w-96 md:pl-6">
                  <h1>Join our community</h1>
                  <p className="leading-relaxed text-base mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis on proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <div className="flex flex-col md:mt-4 mt-6">
                    <a
                      onClick={() => addModal(SignUpModal)}
                      className="justify-center inline-flex text-white bg-orange-500 rounded-full border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded w-72"
                    >
                      Sign up
                    </a>
                  </div>
                  <hr className="w-72 my-4 border-black" />
                  <a
                    onClick={() => addModal(LoginModal)}
                    className="justify-center inline-flex text-white bg-orange-500 mb-4 rounded-full border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded w-72"
                  >
                    Sign in
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
