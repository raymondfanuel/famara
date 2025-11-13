import React from 'react'
import  styles from "./Login.module.css";
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Login = () => {

   const handleSubmit = async (e)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const res = await fetch("http://localhost:5001/login", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(data)   });
        const {message} = await res.json();
        alert(message);
    }


return(
    <div className={styles.body}>
    <div className={styles.container}>
      <div className={styles.login_box}>
        <h2><img src={assets.famara_pic} alt="" />Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.input_box}>
            <input type="email" name='email' required />
            <label>Email</label>
          </div>
          <div className={styles.input_box}>
            <input type="password" name='password' required />
            <label>Password</label>
          </div>
          <div className={styles.forgot_pass}>
            <a href="#">Forgot your password?</a>
          </div>
          <button type="submit" className={styles.btn}>Login</button>
          <div className={styles.signup_link}>
            <Link to='/signup'>Signup</Link>
          </div>
        </form>
      </div>
      {Array.from({length: 50}, (_, i)=>(
        <span key={i} style={{"--i": i}}></span>
      ))}
    </div>
    </div>
)
}

export default Login
