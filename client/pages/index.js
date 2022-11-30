import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header.js';
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../slices/auth';
import EventBus from '../common/EventBus';
import PetService from '../services/pet.service';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
import Link from 'next/link';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
const NewsWidget = dynamic(()=>import('../components/NewsWidget'), { ssr: false });

export default function Home() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { user: currentUser } = useSelector((state) => state.auth);
  const [newsItems, setItems] = useState();
  const [products, setProducts] = useState([]);
  let feed = PetService.curatedPetFeed(currentUser?.pets);
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const fetchProducts = async () => {
    const result = await axios(
      'http://localhost:8080/products',
    );
    setProducts(result.data.data);
};

useEffect(() => {
  fetchProducts();
},[]);
  
  useEffect(() => {
    setItems(feed)
    setCartItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    );
  }, [currentUser]);
 
  useEffect(() => {
    EventBus.on("logout", () => {
      logOut();
    });
    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);
  return (
    <>
      <Head>
        <title>The Latest News on Pets</title>
        <meta name="description" content="News Feed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header countCartItems={cartItems.length} />
      <main className={styles.main}>
        {/* Feed display - Flex Grid */}
        
        <div className="flex flex-wrap m-10">
        <div className='pb-6 mt-24'>
        <h1>News</h1>
        </div>
        <div className="flex flex-wrap bg-[#f5f6f8]">
        {newsItems?.map((item) => {
              return (
                <div key={item.id} className="w-full p-4 mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
                  <a href={"news/" + item.id}>
                  <NewsWidget item={item}/>
                    </a>
                  </div>               
              )
            })}
        </div>
        </div>
        <section>
          <div className="sm:flex p-4">
            <div className="w-full flex md:w-2/4 p-12 justify-center">            
              {products.length ? ( <div className="justify-center bg-blue-500 lg:p-16 "> 
              <h1 className='text-white text-4xl'>The Lastest in store!</h1>
              <ProductCard key={products[0]?.sku} item={products[0]} />
              </div>) : null}     
            </div>
            <div className="w-full flex md:w-2/4 p-12 justify-center">
               <div className="justify-center bg-orange-700 lg:p-16 ">     
               <h1 className='text-white text-4xl'>What's popular!</h1>         
               <ProductCard key={products[5]?.sku} item={products[5]} />
               </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
};
