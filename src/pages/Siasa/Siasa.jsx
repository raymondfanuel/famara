import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import DevFooter from '../../components/DevFooter/DevFooter'
import BlogList from '../../components/BlogList/BlogList'

const Siasa = () => {
  return (
    <div>
      <Navbar />
      <BlogList filterCategory={"Siasa"}/>
      <Footer />
      <DevFooter />
    </div>
  )
}

export default Siasa
