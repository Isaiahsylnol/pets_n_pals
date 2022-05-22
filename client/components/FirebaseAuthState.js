import React, {useEffect, useContext} from 'react';
import { Context } from '../context';
import {onAuthStateChanged, getAuth} from 'firebase/auth'

const FirebaseAuthState = ({children}) => {
    const { dispatch } = useContext(Context);

    useEffect(() => {
        const auth = getAuth();
        return onAuthStateChanged(auth, (user) => {
          if(!user){
              dispatch({
                  type: "LOGOUT",
              })
          } else {
            const { token } = user.getIdTokenResult();
            console.log("TOKEN", token);

              dispatch({
                  type: "LOGIN",
                  payload: user,
              })
          }
         })
      }, [])

    return <>{children}</>
}

export default FirebaseAuthState;