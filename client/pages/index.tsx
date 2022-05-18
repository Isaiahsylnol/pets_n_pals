import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { GetServerSideProps } from 'next'
import MenuButton from '../components/MenuButton'
import Footer from '../components/Footer'
import { Context } from '../context/index'

const Home: NextPage = ({ data }: any) => {
  const { state } = useContext(Context)
  const [dogs, setDogs] = useState({ data })
  return (
    <div>
     <div style={{marginBottom: "80px"}}>
        <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      </div>

      <div className="min-h-screen justify-center">
        <div className="sm:flex-col-2 mx-auto mt-11 w-full justify-center space-x-4 bg-green-300 p-11 sm:flex">
          <div> {JSON.stringify(state?.user?.email)} </div>
          <MenuButton image={require('/assets/pet_news.jpg')} link={'/media'} />
          <MenuButton image={require('/assets/media.png')} link={'/media'} />
          <MenuButton image={require('/assets/healthcare.jpg')} link={'/health'}/>
          <MenuButton image={require('/assets/toys1.png')} link={'/shop/item-347384/red'}/>
        </div>
      </div>
      <Footer />
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
