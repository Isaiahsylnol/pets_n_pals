import type { NextPage } from 'next'
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { GetServerSideProps } from 'next';

const Home: NextPage = ({data}:any) => {
  const [dogs, setDogs] = useState({data})
  return (
    <div className="flex min-h-screen flex-col  justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <h2>Index page</h2>
          <h2>{dogs.data[0].name}</h2>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async () => {

  const res = await fetch('https://api.thedogapi.com/v1/breeds')
  const data = await res.json()
  console.log(data[0]);
  return { props: {data}}
  
}