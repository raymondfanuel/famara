import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import DevFooter from '../../components/DevFooter/DevFooter'
import BlogList from '../../components/BlogList/BlogList'

const Burudani = () => {
  return (
    <div>
      <Navbar />
      <BlogList filterCategory={'burudani'}/>
      <Footer />
      <DevFooter />
    </div>
  )
}

export default Burudani
