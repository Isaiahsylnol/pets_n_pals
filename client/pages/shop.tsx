import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import MenuButton from '../components/MenuButton'
import Footer from '../components/Footer'
import { Context } from '../context/index'

const Shop: NextPage = ({ data }: any) => {
  const { state } = useContext(Context)
 
  return (
    <div>
     <div style={{marginBottom: "80px"}}>
        <Head>
        <title>Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      </div>

      <div className="min-h-screen justify-center">
        <h2>Shop</h2>
      </div>
      <Footer />
    </div>
  )
}

export default Shop 
