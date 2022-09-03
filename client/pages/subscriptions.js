import Head from "next/head";
import Header from "../components/Header.js";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer.js";
import styles from "../styles/Home.module.css";
import SubscriptionItem from "../components/Subscriptions/item.js";

export default function Subscriptions() {
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const handleRegister = () => {};

  return (
    <div>
      <Head>
        <title>Subscriptions</title>
        <meta name="description" content="Subscriptions Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1>Subscriptions</h1>
        <div className="w-full flex items-center justify-center flex-wrap p-7 bg-grey-light">
         <SubscriptionItem tier="Basic"/>
         <SubscriptionItem tier="Premium"/>
        </div>
        
      </main>
      <Footer />
    </div>
  );
}
