import React, { useContext } from 'react'
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
import Blog from './pages/blogpage/Blog'
import { useState, createContext } from 'react'
import { Mycontext } from './Mycontext'
import AdminPostForm from './components/Adminpost/AdminPostForm'
import BlogList from './components/BlogList/BlogList'
import AdminBloglist from './components/AdminBloglist/AdminBloglist'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [postPage, setPostPage] = useState([{id: 2, title: "Greatest of all time",
       author: "Decool", file_name: ["dlsdkldl.jpg", "dnddd.jpg",], content: ["dsdjk", "dkwe"], 
      created_at: "2 days ago"}]);

  return (
    <div>
              <Mycontext.Provider value={[postPage, setPostPage]}>
                <Routes>

         <Route path='/' element={<Home setPostPage={setPostPage} />}></Route>
        <Route path='/michezo' element={<Michezo setPostPage={setPostPage} />}></Route>
        <Route path='/habari' element={<Habari setPostPage={setPostPage}/>}></Route>
        <Route path='/habariZote' element={<HabariZote setPostPage={setPostPage}/>}></Route>
        <Route path='/siasa' element={<Siasa setPostPage={setPostPage}/>}></Route>
        <Route path='/burudani' element={<Burudani setPostPage={setPostPage}/>}></Route>
        <Route path='/zaidi' element={<Zaidi  setPostPage={setPostPage}/>}></Route>
        <Route path='/privacyPolicy' element={<PrivacyPolicy setPostPage={setPostPage}/>}></Route>
        <Route path='/login' element={<Login setPostPage={setPostPage}/>}></Route>
        <Route path='/signup' element={<Signup setPostPage={setPostPage}/>}></Route>
        <Route path='/admin/*' element={<Admin/>}>
           <Route index element={<AdminBloglist/>} />
          <Route path="upload" element={<AdminPostForm />} />
           <Route path="analytics" element={<h2>Analytics Page</h2>} />
          <Route path="message" element={<h2>Message Page</h2>} />
          <Route path="projects" element={<h2>Projects Page</h2>} />
        </Route>
        <Route path='/blog' element={<Blog postPage={postPage}/>}/>
       
      </Routes>
              </Mycontext.Provider>
    <ToastContainer position='top-right'/>
    </div>
  )
}

export default App
