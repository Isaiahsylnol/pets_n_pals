import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from '../context/index'
import FirebaseAuthState from '../components/FirebaseAuthState'
import ModalRoot from '../components/ModalRoot'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <FirebaseAuthState>
      <ModalRoot />
    <Component {...pageProps} />
    </FirebaseAuthState>
  </Provider>
  )
}

export default MyApp
