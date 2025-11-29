import React, { useEffect, useState } from "react";
import styles from "./admin.module.css";
import { Outlet, Link } from "react-router-dom";
import {
  FaBlog,
  FaHouse,
  FaUpload,
  FaChartSimple,
  FaMessage,
  FaFolder,
  FaBookmark,
  FaCircleCheck,
  FaClock,
  FaDoorOpen,
  FaBars
} from "react-icons/fa6";
import { assets } from "../../assets/assets";
import { server } from "../../port/server";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal);

export default function Admin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  useEffect(()=>{
    fetch(`${server}/session`, {
      credentials: "include"
    })
    .then(res=> res.json())
    .then(data=>{
      if(!data.loggedIn){
        navigate('/login');
      }else{
        setUsername(data.username);
      }
    })
  }, []);
  const logOut = ()=>{
    fetch(`${server}/logout`, {credentials: 'include'})
    .then(res=>res.json())
    .then(data=>{
      if(data.loggedOut){
        navigate('/login');
      }
    })
    .catch(err=>{
      console.log(err);
    })
  }
  const menuItems = [
    { icon: <FaHouse />, label: "Home", link: "/admin" },
    { icon: <FaUpload />, label: "Upload", link: "/admin/upload" },
    { icon: <FaChartSimple />, label: "Analytics", link: "/admin/Analytics" },
    { icon: <FaMessage />, label: "Message", link: "/admin/Message" },
    { icon: <FaFolder />, label: "Projects", link: "/admin/projects" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [hidemenu, sethidemenu] =useState(true);

  return (
    <div className={styles.body}>
 <div className={styles.container}>
     <FaBars className={styles.menuIcon} onClick={()=> sethidemenu(!hidemenu)}/>
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${hidemenu? styles.hidemenu : ''}`}>
        <div className={styles.logo}>
          <img src={assets.fmg_icon} alt="fmg-icon" className={styles.fmg}/>
        </div>

        <nav className={styles.menu}>
          <ul>
            {menuItems.map((item, index) => (
              <li onClick={()=>setActiveIndex(index)}
                key={index}
                className={activeIndex === index ? styles.active : ""}
              >
                <Link to ={item.link} >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
             <li onClick={()=>{navigate('/')}}><a ><FaBlog /><span
            >Blogs Page</span></a></li>
            <li onClick={logOut}><a ><FaSignOutAlt className={styles.logout}/><span className={styles.logout}
            >Logout</span></a></li>
          </ul>
        </nav>

        <div className={styles.profile}>
          <div className={styles.avatar}>
            <img src={assets.Aura_img} alt="Profile" />
          </div>
          <div className={styles.userInfo}>
            <h3>AuraLinx</h3>
            <p>Mobile and web developer</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.h1}>Welcome Back Decool</h1>
          <p>Check out your project statistics for today</p>
        </header>
      <Outlet/>
        
      </main>
    </div>
    </div>
   
  );
}
