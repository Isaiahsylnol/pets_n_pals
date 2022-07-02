import type { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import MenuButton from '../components/MenuButton'
import Footer from '../components/Footer'
import { Context } from '../context/index'

const Home: NextPage = ({ data }: any) => {
  const { state } = useContext(Context)
  const [pets, setPets] = useState([])

  useEffect( () => {
    const fetchData = async () => {
      // Iterate through user's pets 
      // fetching API data concerning the respected dog breed
      for(let i = 0; i < state?.user?.pets?.length; i++){
        data = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${state?.user?.pets[i].breed}`).then(response => response.json())
      .then(item => {
        pets.push(item)
        //console.log('Success:', item);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      }
    }
      fetchData()
      console.log("STATE: ", state?.user?.pets)
  }, [state.user])

  return (
    <div>
      <div style={{ marginBottom: '80px' }}>
        <Head>
          <title>Dashboard</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
      </div>
      <main>
        <div className="flex flex-wrap -mx-4 overflow-hidden md:-mx-6 lg:-mx-5 xl:-mx-4">
          <div className="my-4 bg-green-200 px-4 w-full overflow-hidden md:my-6 md:px-6 lg:my-5 lg:px-5 xl:my-4 xl:px-4 xl:w-1/2">
           {/* Column Content */}
            <h2 className="text-xl">text 1</h2>
          </div>
          <div className="my-4 bg-orange-200 px-4 w-full overflow-hidden md:my-6 md:px-6 lg:my-5 lg:px-5 xl:my-4 xl:px-4 xl:w-1/2">
           {/* Column Content */}
            <h2>text 2</h2>
          </div>
        </div>
      </main>
      <div className="min-h-screen justify-center">
        <div className="sm:flex-col-2 mx-auto mt-11 w-full justify-center space-x-4 bg-green-300 p-11 sm:flex">
          <MenuButton image={require('/assets/pet_news.jpg')} link={'/media'} />
          <MenuButton image={require('/assets/media.png')} link={'/media'} />
          <MenuButton
            image={require('/assets/healthcare.jpg')}
            link={'/health'}
          />
          <MenuButton
            image={require('/assets/toys1.png')}
            link={'/shop/item-347384/red'}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
