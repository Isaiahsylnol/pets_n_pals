import React, { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header.js";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
    setCartItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    );
  }, []);
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Various products for purchase." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header countCartItems={cartItems.length} />
      <main className="min-h-screen">
        {/* Shop items - Flex Grid */}
        <div className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 justify-center mt-10 mb-5">
          {products?.data?.map((item) => {
            return <ProductCard key={item.sku} item={item} />;
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
