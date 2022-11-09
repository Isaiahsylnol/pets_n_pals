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
const NewsWidget = dynamic(()=>import('../components/NewsWidget'), { ssr: false });

export default function Home() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { user: currentUser } = useSelector((state) => state.auth);
  const [newsItems, setItems] = useState();
  let feed = PetService.curatedPetFeed(currentUser?.pets);
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    setCartItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    );
  }, [currentUser]);

 useEffect(() => {
  setItems(feed)
}, [currentUser]);

  useEffect(() => {
    // if (currentUser) {
    //   setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
    //   setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    // } else {
    //   setShowModeratorBoard(false);
    //   setShowAdminBoard(false);
    // }
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
      </main>
      <Footer/>
    </>
  )
};
