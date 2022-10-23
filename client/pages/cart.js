import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header.js";
import Checkout from "../components/Checkout";
import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('cartItems')));
  }, []);
  return (
    <div>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Shopping cart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header countCartItems={cartItems?.length} />
        <div className="w-full flex flex-wrap bg-grey-light justify-center">
          <Checkout />
        </div>
      <Footer />
    </div>
  );
};

export default Cart;
