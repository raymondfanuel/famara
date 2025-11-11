import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Michezo from './pages/Michezo/Michezo'
import Habari from './pages/Habari/Habari'
import HabariZote from './pages/HabariZote/HabariZote'
import Siasa from './pages/Siasa/Siasa'
import Burudani from './pages/Burudani/Burudani'
import Zaidi from './pages/Zaidi/Zaidi'
import Footer from './components/Footer/Footer'
import DevFooter from './components/DevFooter/DevFooter'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/michezo' element={<Michezo />}></Route>
        <Route path='/habari' element={<Habari />}></Route>
        <Route path='/habariZote' element={<HabariZote />}></Route>
        <Route path='/siasa' element={<Siasa />}></Route>
        <Route path='/burudani' element={<Burudani />}></Route>
        <Route path='/zaidi' element={<Zaidi />}></Route>
        <Route path='/privacyPolicy' element={<PrivacyPolicy />}></Route>
      </Routes>
      <Footer />
      <DevFooter />
    </div>
  )
}

export default App
