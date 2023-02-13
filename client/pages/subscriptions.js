import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header.js";
import { useSelector } from "react-redux";
import Footer from "../components/Footer.js";
import { CheckIcon, MinusIcon } from "@heroicons/react/solid";
import SubscribeContainer from "../components/Subscriptions/Container.js";

export default function Subscriptions() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(currentUser);
  }, []);

  return (
    <div>
      <Head>
        <title>Subscriptions</title>
        <meta name="description" content="Subscriptions Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="w-full p-12 flex flex-col items-center">
          <h1 className="text-3xl font-bold pb-16">
            Choose the plan that's right for you.
          </h1>
          <div className="flex items-center justify-center flex-wrap p-7 gap-16">
            <SubscribeContainer
              tier="Basic"
              price="$0.00/month"
              description="Ideal for individuals interested in the latest healthcare tips and news concerning pets."
            >
              <div className="w-full flex">
                <CheckIcon className="h-6 w-6 ml-5" />
                <h3 className="pl-4">Register 2 Pets</h3>
              </div>
              <div className="w-full flex">
                <MinusIcon className="h-6 w-6 ml-5" />
                <h3 className="pl-4">Gift Box</h3>
              </div>
              <div className="w-full flex">
                <MinusIcon className="h-6 w-6 ml-5" />
                <h3 className="pl-4">Pet Life Magazine</h3>
              </div>
              <div className="w-full flex">
                <MinusIcon className="h-6 w-6 ml-5" />
                <h3 className="pl-4">Pet Food Basket</h3>
              </div>
            </SubscribeContainer>
            <SubscribeContainer
              tier="Premium"
              price="$23.99/month"
              description="Ideal for individuals who want the latest healthcare tips, news, treats & swag geared towards their pet."
            >
              <div className="w-full flex">
                <CheckIcon className="h-6 w-6 ml-5" />
                <h3 className="pl-4">Register more than 2 Pets</h3>
              </div>
              <div className="w-full flex">
                <CheckIcon className="h-6 w-6 ml-5" />
                <h3 className="pl-4">Gift Box</h3>
              </div>
              <div className="w-full flex">
                <CheckIcon className="h-6 w-6 ml-5" />
                <h3 className="pl-4">Pet Life Magazine</h3>
              </div>
              <div className="w-full flex">
                <CheckIcon className="h-6 w-6 ml-5" />
                <h3 className="pl-4">Pet Food Basket</h3>
              </div>
            </SubscribeContainer>
          </div>
          {user ? null : (
            <a href="/login-register">
              <button
                type="button"
                className="text-white bg-orange-400 hover:bg-[#1F1F1F] font-medium rounded-full text-sm px-8 py-4 text-center mr-2 mb-2"
              >
                Sign Up
              </button>
            </a>
          )}
          <div className="mt-8">
            <span>
              See{" "}
              <a
                href="/terms"
                target="_blank"
                aria-hidden="false"
                className="text-orange-500"
              >
                Terms & Conditions
              </a>{" "}
              for full details. Prepaid monthly, non-refundable, automatically
              renews monthly.
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
