import React, { useEffect, useState } from "react";
import styles from "./admin.module.css";
import {
  FaApple,
  FaHouse,
  FaCompass,
  FaChartSimple,
  FaMessage,
  FaFolder,
  FaBookmark,
  FaCircleCheck,
  FaClock,
  FaDoorOpen,
  FaBars
} from "react-icons/fa6";
import AdminPostForm from "../../components/Adminpost/AdminPostForm";
import { assets } from "../../assets/assets";
import { server } from "../../port/server";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

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
    { icon: <FaHouse />, label: "Home" },
    { icon: <FaCompass />, label: "Explore" },
    { icon: <FaChartSimple />, label: "Analytics" },
    { icon: <FaMessage />, label: "Message" },
    { icon: <FaFolder />, label: "Projects" },
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
              <li
                key={index}
                className={activeIndex === index ? styles.active : ""}
                onClick={() => setActiveIndex(index)}
              >
                <a href="#">
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
            <li onClick={logOut}><a href="#"><FaSignOutAlt className={styles.logout}/><span className={styles.logout}
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
          <h1 className={styles.h1}>Welcome Back {username.toUpperCase()}</h1>
          <p>Check out your project statistics for today</p>
        </header>
         <AdminPostForm/>
      </main>
    </div>
    </div>
   
  );
}
