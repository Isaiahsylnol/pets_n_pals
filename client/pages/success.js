import Head from 'next/head'
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'
import Header from '../components/Header.js';
import ProductCard from '../components/ProductCard';
import React, { useState, useEffect } from 'react';

const Success = () => {
 
  const [products, setProducts] = useState([]);
 
    return (
        <div>
            <Head>
        <title>Shop</title>
        <meta name="description" content="Various products for purchase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        {/* Feed display - Flex Grid */}
        <h1>Thanks for your order!</h1>
    <p>
      We appreciate your business!
      If you have any questions, please email
      <a href="mailto:orders@example.com">orders@example.com</a>.
    </p>
      </main>
      <Footer/>
        </div>
    )
}

export default Success;