import Head from "next/head";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Header from "../components/Header.js";
import ProductCard from "../components/ProductCard";
import React, { useState, useEffect } from "react";

const Shop = () => {
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
    <div>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Various products for purchase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header countCartItems={cartItems.length} />
      <main className={styles.main}>
        {/* Shop items - Flex Grid */}
        <div className="flex flex-wrap bg-grey-light pt-20">
          {products?.data?.map((item) => {
            return <ProductCard key={item.sku} item={item} />;
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
