import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

const Home = () => {
  const navigation = useNavigation()
  return (
    <div className='flex flex-col'>
      <Navbar/>
      {
        navigation.state === "loading" ? <div className='text-center my-10 text-4xl font-bold'>Loading....</div> : <Outlet />
      }
      <Footer/>
    </div>
  )
}

export default Home