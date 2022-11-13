import Head from "next/head";
import Header from "../components/Header.js";
import Footer from "../components/Footer";
import PetCard from "../components/PetCard.js";
import { useSelector } from "react-redux";
import CreatePetModal from "../components/Modal/CreatePetModal";
import ModalService from "../components/Modal/services/ModalService";
import {
  PhoneIcon,
  ExclamationIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import Login from "./login-register";

export default function Profile() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [user, setUser] = useState();

  const addModal = (modal) => {
    ModalService.open(modal);
  };

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);
  if (user) {
    return (
      <div className="container-fluid justify-center w-full">
        <Head>
          <title>Profile</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="mt-20 grid-cols-1 mx-auto sm:flex justify-center gap-6 p-11 md:grid-cols-2 lg:grid-cols-2">
          {/* User profile widget - START */}
          <div className="h-min w-full sm:w-3/4 lg:w-2/5 rounded-xl border-2 border-gray-300 bg-gray-100 p-6 text-6xl">
            {/* Edit User Profile Button - START */}
            <div className="w-full float-right">
              <button className="h-11 text-base float-right rounded py-2 px-4 font-bold hover:border-2 hover:text-orange-500">
                Edit
              </button>
            </div>
            {/* Edit User Profile Button  - END*/}
            <div className="w-full p-6 text-base">
              <p className="text-2xl font-bold mb-2">{user?.username}</p>
              <p>{user?.address}</p>
              <p>Toronto, Canada</p>
              <p>652-333-4553</p>
              <p>{user?.email}</p>
              <p>{user?.account_type}</p>
              <div className="mt-10 grid grid-cols-1 text-white">
                <button className="h-10 w-36 justify-start rounded bg-yellow-500 font-bold   hover:bg-blue-700">
                  <PhoneIcon className="inline h-6 w-6" />
                  <a className="ml-3">Support</a>
                </button>
                <br />
                <button className="h-10 w-44 justify-start rounded bg-blue-500 font-bold   hover:bg-blue-700">
                  <ViewGridIcon className="inline h-6 w-6" />
                  <a className="ml-3 justify-start">Manage Plan</a>
                </button>
                <br />
                <button className="h-10 w-36 justify-start rounded bg-red-500 font-bold   hover:bg-blue-700">
                  <ExclamationIcon className="inline h-6 w-6" />
                  <a className="ml-3 justify-start">Deactivate</a>
                </button>
              </div>
            </div>
          </div>
          {/* grid nested  */}
          <div className="grid grid-cols-1 gap-6 w-full sm:w-full md:w-full md:grid-cols-1 lg:w-2/5 lg:grid-cols-1">
            <button
              onClick={() => addModal(CreatePetModal)}
              className="btn btn-primary m-4 h-min"
            >
              Create Pet
            </button>
            {user?.pets?.map((pet) => {
              return (
                <li key={pet?._id} className="p-5 rounded-xl h-min" style={{ listStyle: "none" }}>
                  {
                    <PetCard
                      data={pet}
                      image={require("/assets/default_pet_profile.png")}
                    />
                  }
                </li>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return <Login />;
}
