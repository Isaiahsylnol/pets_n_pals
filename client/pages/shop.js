import Head from 'next/head'
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'
import Header from '../components/Header.js';
import products from '../mock_data/products.json';
import ProductCard from '../components/ProductCard';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    );
  }, []);
    return (
        <div>
            <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header countCartItems={cartItems.length} />
      <main className={styles.main}>
        {/* Feed display - Flex Grid */}
        <div className="w-full flex flex-wrap bg-grey-light justify-center">
        {products?.map((item) => {
              return (
                <Link href={{pathname: '/products/[sku]', query: {
                    sku: item.sku,
                    name: item.name,
                    price: item.price,
                    thumbnail: item.thumbnail,
                    description: item.description
                }}} as={`/products/${item.sku}`} key={item.sku} className='lg:w-1/4 md:w-1/2 w-full'>
                  <a className='m-4'>
                  <ProductCard item={item} />
                  </a>
                </Link>
              )
            })}
        </div>
      </main>
      <Footer/>
        </div>
    )
}

export default Shop;