import React, {useEffect, useContext} from 'react';
import { Context } from '../context';
import axios from 'axios';
import firebase from '../firebase';
import { useRouter } from 'next/router'

const FirebaseAuthState = ({children}) => {
    const { dispatch } = useContext(Context);
    const router = useRouter()

    useEffect(() => {
        firebase.onIdTokenChanged(async (user) => {
            if(!user){
                dispatch({
                    type: "LOGOUT",
                })
                // router.push('/login')
            } else {
                const token  = await user.getIdToken();
                  axios.post('http://localhost:8000/api/auth/signin', {
                      username: "Kyrie",
                      password: "gooDmen"
                  }).then(
                    dispatch({
                        type: "LOGIN",
                        payload: user,
                    }),
                    console.log("SING-IN: ", user)
                  )
                  .catch((error) => {
                      console.error(error)
                    })
                }
             })
          }, [])

    return <>{children}</>
}

export default FirebaseAuthState;