import React, { useState } from 'react'
import { useRouter } from 'next/router'
// import firebase from '../firebase';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'
import Image from 'next/image'

import { createUserWithEmailAndPassword } from 'firebase/auth'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [pass, setPassword] = useState('')
  const [conPassword, setConPassword] = useState('')

  const validatePassword = () => {
    let isValid = true
    if (pass !== '' && conPassword !== '') {
      if (pass !== conPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const registerUser = (e) => {
    e.preventDefault()
    setError('')
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, pass)
        .then((res) => {
          console.log(res.user)
        })
        .catch((err) => setError(err.message))
    }
    setEmail('')
    setPassword('')
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
        <form onSubmit={registerUser} className="py-6 px-8">
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className=" mt-2 h-5 w-full rounded-md border px-3 py-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600"
          />
          <label className="mt-3 block font-semibold">Email</label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className=" mt-2 h-5 w-full rounded-md border px-3 py-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600"
          />
          <label className="mt-3 block font-semibold">Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={pass}
            className=" mt-2 h-5 w-full rounded-md border px-3 py-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600"
          />
          <label className="mt-3 block font-semibold">Confirm Password</label>
          <input
            type="password"
            onChange={(e) => setConPassword(e.target.value)}
            value={conPassword}
            placeholder="Confirm Password"
            className=" mt-2 h-5 w-full rounded-md border px-3 py-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600"
          />
          <div className="flex items-baseline justify-between">
            <button className="mt-4 w-full rounded-lg bg-blue-400 py-2 px-6 text-white">
              Login
            </button>
          </div>
          <div className="flex flex-col">
            <a href="/login" className="text-center text-sm hover:underline">
              Already have an account? Login
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
