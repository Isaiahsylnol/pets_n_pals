import React, { useEffect, useContext } from 'react'
import { Context } from '../context'
import axios from 'axios'
import firebase from '../firebase'

const FirebaseAuthState = ({ children }) => {
  const { dispatch } = useContext(Context)

  useEffect(() => {
    firebase.onIdTokenChanged(async (user) => {
      if (!user) {
        dispatch({
          type: 'LOGOUT',
        })
      } else {
        const value = localStorage.getItem('userData')
        const user = !!value ? JSON.parse(value) : undefined

        dispatch({
          type: 'LOGIN',
          payload: user,
        })
        // const token  = await user.getIdToken();
        //   axios.post('auth/current-user', {}).then(
        //     dispatch({
        //         type: "LOGIN",
        //         payload: user,
        //     }),
        //     console.log("FIREBASE STATE: ", user)
        //   )
        //   .catch((error) => {
        //       console.error(error)
        //     })
      }
    })
  }, [])

  return <>{children}</>
}

export default FirebaseAuthState
