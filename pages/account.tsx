import React, { useContext, useState } from 'react'
import { Context } from '../context';
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function account() {
  const { state } = useContext(Context)
  const router = useRouter()

  useEffect(() => {
    if (!(state.user)) {
      router.push('/login')
    }
  }, [])

  return <p>User: { state.user?.email }</p>
  
}

export default account