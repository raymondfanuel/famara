import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import DevFooter from '../../components/DevFooter/DevFooter'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      Home page
      <Footer />
      <DevFooter />
    </div>
  )
}

export default Home
