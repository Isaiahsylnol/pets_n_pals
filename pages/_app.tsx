import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from '../context'
import {useState, useEffect} from 'react'
import {auth} from '../firebase'
import {onAuthStateChanged} from 'firebase/auth'

function MyApp({ Component, pageProps }: AppProps) {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
     })
  }, [])
  return (
    <Provider value={{currentUser}}>
    <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
