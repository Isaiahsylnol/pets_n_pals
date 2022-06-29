import React, { useEffect, useState } from 'react' 
import Image from 'next/image' 
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import firebase from '../firebase'
import Router from 'next/router'
import axios from 'axios';
import { Context } from '../context/index'
import { useContext } from 'react'

function login() {
  const { state, dispatch } = useContext(Context)
  
  const [errors, setErrors] = useState({});
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPass, setLoginPass] = useState('')

  useEffect(() => {
console.log("STATE: ", state)
  }, [])
 
  const login = e => {
    e.preventDefault()
    signInWithEmailAndPassword(firebase, loginEmail, loginPass)
    .then(({user}) => {
      if(!user) {
        console.log("no user signed in")
      .catch(err => alert(err.message))
    }else{
        axios.post('http://localhost:8000/api/user', 
        {
            email: loginEmail
        }
        ).then(function (response) {
          dispatch({
            type: "LOGIN",
            payload: response.data,
        })
        localStorage.setItem("userData", JSON.stringify(response.data)) 
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        Router.push("/") 
        
        //console.log("user token: ", user.getIdToken())
    }
    })
    .catch(err => setErrors(err.message))
  }

  return (
    <div className="justify-content-center container mx-auto">
      <div className="relative mx-auto mt-4 max-w-xl bg-white text-left shadow-md sm:rounded-lg">
        <div className="justify-content-center container mx-auto flex flex-col">
          <h1 className="p-6 text-center title">Create Account</h1>
          <Image
            className="mx-auto object-contain"
            alt="Food Image"
            width={300}
            height={300}
            src={require('/assets/logo2.png')}
          />
        </div>
        <form className="py-6 px-8">
        <label className="block font-semibold">Username or Email</label>
        <input 
            type="email" 
            placeholder="Email" 
            className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md" 
            onChange={(e) => setLoginEmail(e.target.value)}  />
        <label className="block mt-3 font-semibold">Password</label>
        <input 
            type="password"
            placeholder="Password"
            className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md"
            onChange={(e) => setLoginPass(e.target.value)}   />
        <div className="flex justify-between items-baseline">
          <button onClick={login} className="mt-4 bg-blue-500 text-white py-2 px-6 w-full rounded-lg">Login</button>
        </div>
        <div className='flex flex-col'>
          <a href="#" className="text-sm hover:underline">Forgot password?</a>
          <a href="/register" className="text-sm hover:underline text-center">Register</a>
          </div>
      </form>
      </div>
    </div>
  )
}

export default login