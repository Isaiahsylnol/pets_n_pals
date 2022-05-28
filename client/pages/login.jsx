import React, { useState } from 'react'
import LoginRegisterForm from '../components/LoginRegisterForm';
import Image from 'next/image'

function login() {

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPass, setLoginPass] = useState('')

  return (
    <div className='container flex flex-col mx-auto justify-content-center'>
      <Image
    className='object-contain'
    alt="Logo Image"
    width={300}
    height={300}
    src={require('/assets/logo2.png')} />
       <LoginRegisterForm  
        email={loginEmail}
        setEmail={setLoginEmail}
        pass={loginPass}
        setPass={setLoginPass}
        buttonName="Login"/>
    </div>
  )
}

export default login