import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Michezo from './pages/Michezo/Michezo'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/michezo' element={<Michezo />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
