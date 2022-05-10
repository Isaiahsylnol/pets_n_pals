import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { GetServerSideProps } from 'next'
import MenuButton from '../components/MenuButton'
import { Context } from '../context'

const Home: NextPage = ({ data }: any) => {
  const { state } = useContext(Context)
  const [dogs, setDogs] = useState({ data })
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="min-h-screen justify-center bg-red-200">
        <div className="sm:flex-col-2 mx-auto mt-11 w-full justify-center space-x-4 bg-green-300 p-11 sm:flex">
          <div> {JSON.stringify(state)} </div>
          <MenuButton image={require('/assets/pet_news.jpg')} link={'/media'} />
          <MenuButton image={require('/assets/media.png')} link={'/media'} />
          <MenuButton image={require('/assets/healthcare.jpg')} link={'/health'}/>
          <MenuButton image={require('/assets/toys1.png')} link={'/shop/item-347384/red'}/>
        </div>
      </div>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
            Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home

// export const getServerSideProps: GetServerSideProps = async () => {

//   const res = await fetch('https://api.thedogapi.com/v1/breeds')
//   const data = await res.json()
//   console.log(data[0]);
//   return { props: { data } }

// }
