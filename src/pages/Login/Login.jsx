import React from 'react'
import  styles from "./Login.module.css";
import { assets } from '../../assets/assets'

const Login = () => {
return(
    <div className={styles.body}>
    <div className={styles.container}>
      <div className={styles.login_box}>
        <h2><img src={assets.famara_pic} alt="" />Login</h2>
        <form action="#">
          <div className={styles.input_box}>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className={styles.input_box}>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className={styles.forgot_pass}>
            <a href="#">Forgot your password?</a>
          </div>
          <button type="submit" className={styles.btn}>Login</button>
          <div className={styles.signup_link}>
            <a href="#">Signup</a>
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
