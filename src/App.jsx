import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Michezo from './pages/Michezo/Michezo'
import Habari from './pages/Habari/Habari'
import HabariZote from './pages/HabariZote/HabariZote'
import Siasa from './pages/Siasa/Siasa'
import Burudani from './pages/Burudani/Burudani'
import Zaidi from './pages/Zaidi/Zaidi'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import Login from './pages/Login/Login'
import Signup from './pages/register/Signup'
import Admin from './pages/Admin/admin'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/michezo' element={<Michezo />}></Route>
        <Route path='/habari' element={<Habari />}></Route>
        <Route path='/habariZote' element={<HabariZote />}></Route>
        <Route path='/siasa' element={<Siasa />}></Route>
        <Route path='/burudani' element={<Burudani />}></Route>
        <Route path='/zaidi' element={<Zaidi />}></Route>
        <Route path='/privacyPolicy' element={<PrivacyPolicy />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='admin' element={<Admin/>}/>
      </Routes>
    </div>
  )
}

export default App
