import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './Header.js';
import Footer from './Footer'


import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState, useCallback } from 'react'

export default function PetList() {
 // const { state, dispatch } = useContext(Context)
  const [currentPet, setCurrentPet] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(-1);

  const users = useSelector(state => state.users)
  const dispatch = useDispatch();

  // const initFetch = useCallback(() => {
  //   dispatch(retrieveUsers());
  // }, [dispatch])

  // useEffect(() => {
  //   initFetch()
  // },[initFetch])
      
  return (
    <div className="container-fluid mx-auto">
     {/* <ul>
        {users && users.map((pet, index) => (
            <li key={index}>
                { pet.name}
            </li>
        ))}
     </ul> */}
     <div>
        {/* {
            currentPet ? (
                <div>{ pet.name }</div>
            ) : (
                <div>
                    <br />
                    <p>Please click a pet</p>
                </div>
            )
        } */}
     </div>
    </div>
  )
}
