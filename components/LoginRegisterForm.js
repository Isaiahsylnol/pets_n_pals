import React, { useContext, useState } from 'react'

const login = () => {
    console.log('submit pressed')
}

function LoginRegisterForm({email, setEmail, pass, setPass, buttonName}) {
    
  return (
    <div className='container mx-auto justify-content-center'>
      <h2 className='text-center pt-4'>Login page</h2>
      <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left max-w-xl mx-auto">
       
      <div className="py-6 px-8">
        <label className="block font-semibold">Username or Email</label>
        <input type="email" 
        placeholder="Email" 
        className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md" 
        onChange={(e) => setEmail(e.target.value)} value={email}/>
        <label className="block mt-3 font-semibold">Password</label>
        <input type="password" 
        placeholder="Password"
         className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md"
         onChange={(e) => setPass(e.target.value)} value={pass} />
        <div className="flex justify-between items-baseline">
          <button onClick={login} className="mt-4 bg-blue-500 text-white py-2 px-6 w-full rounded-lg">Login</button>
        </div>
        <div className='flex flex-col'>
          <a href="#" className="text-sm hover:underline">Forgot password?</a>
          <a href="/register" className="text-sm hover:underline text-center">Register</a>
          </div>
      </div>
    </div>
    </div>
  )
}

export default LoginRegisterForm