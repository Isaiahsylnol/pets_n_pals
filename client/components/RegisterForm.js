import React from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import axios from 'axios';
import useForm from '../utils/useForm';
import validate from "../utils/formValidation";

const RegisterForm = ({ submitForm }) =>  {

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  
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
        <form onSubmit={handleSubmit} className="py-6 px-8">
          <label className="block font-semibold">Username</label>
          <input
            type="text"
            placeholder="Username" 
            name="username"
            value={values.username}
            onChange={handleChange}
            className=" mt-2 h-5 w-full rounded-md border px-3 py-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600"
          />
          {errors.username && <p>{errors.username}</p>}
          <label className="mt-3 block font-semibold">Email</label>
          <input
            type="email"
            placeholder="Email" 
            name="email"
            value={values.email}
            onChange={handleChange}
            className=" mt-2 h-5 w-full rounded-md border px-3 py-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600"
          />
          {errors.email && <p>{errors.email}</p>}
          <label className="mt-3 block font-semibold">Password (6 or more characters)</label>
          <input
            type="password"
            placeholder="Password" 
            name="password"
            value={values.password}
            onChange={handleChange}
            className=" mt-2 h-5 w-full rounded-md border px-3 py-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600"
          />
          {errors.password && <p>{errors.password}</p>}
    
          <label className="mt-3 block font-semibold">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password" 
            name="conPassword"
            value={values.conPassword}
            onChange={handleChange}
            className=" mt-2 h-5 w-full rounded-md border px-3 py-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600"
          />
          <input
            type="password"
            name="duplicate"
            value={values.duplicate}
           
          />
          {errors.conPassword && <p>{errors.conPassword}</p>}
          {console.log(errors)}
          {errors[0]}
          <div className="flex items-baseline justify-between">
            <button type="submit" className="mt-4 w-full rounded-lg bg-blue-400 py-2 px-6 text-white">
              Register
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

export default RegisterForm
