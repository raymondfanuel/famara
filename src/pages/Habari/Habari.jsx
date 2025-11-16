import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import DevFooter from '../../components/DevFooter/DevFooter'
import BlogList from '../../components/BlogList/BlogList'

const Habari = () => {
  return (
    <div>
      <Navbar />
      <BlogList filterCategory={'habari'}/>
      <Footer />
      <DevFooter />
    </div>
  )
}

export default Habari
