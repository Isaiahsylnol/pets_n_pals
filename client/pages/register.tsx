import React, { useState } from 'react'
import { getAuth } from 'firebase/auth';
import { useForm } from "react-hook-form";
import Image from 'next/image'

import { createUserWithEmailAndPassword } from 'firebase/auth'

function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
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
    const auth = getAuth();
    e.preventDefault()
    setError('')
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("userCredential: ", userCredential)
          console.log("user: ", user)
        })
        .catch((err) => setError(err.message))
    }
    setEmail('')
    setPassword('')
  }

  console.log(errors)

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
        <form onSubmit={handleSubmit((data) =>{
          console.log(data)
        })} className="py-6 px-8">
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true, maxLength: 20 })}
            onChange={(e) => setName(e.target.value)}
            value={name}
            className=" mt-2 h-5 w-full rounded-md border px-3 py-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600"
          />
          <label className="mt-3 block font-semibold">Email</label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className=" mt-2 h-5 w-full rounded-md border px-3 py-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600"
          />
          <label className="mt-3 block font-semibold">Password</label>
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            onChange={(e) => setPassword(e.target.value)}
            value={pass}
            className=" mt-2 h-5 w-full rounded-md border px-3 py-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600"
          />
          <label className="mt-3 block font-semibold">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("conPassword", { required: true })}
            onChange={(e) => setConPassword(e.target.value)}
            value={conPassword}
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
