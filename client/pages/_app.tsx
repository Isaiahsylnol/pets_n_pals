import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from '../context/index'
import {useState, useEffect} from 'react'
import {firebase} from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import FirebaseAuthState from '../components/FirebaseAuthState'

function MyApp({ Component, pageProps }: AppProps) {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
  
    firebase.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user)
        const uid = user.uid;
        console.log(user)
        // ...
      } else {
        // User is signed out
        // ...
      } 
     })
  }, [])
  return (
    <Provider value={{currentUser}}>
      <FirebaseAuthState>
    <Component {...pageProps} />
    </FirebaseAuthState>
  </Provider>
  )
}

export default MyApp
