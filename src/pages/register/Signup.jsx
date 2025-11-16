import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import styles from './Signup.module.css';
import { server } from '../../port/server';
import { Link } from 'react-router-dom';
const Signup = () => {


    const handleSubmit = async (e)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const res = await fetch(`${server}/signup`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(data)   });
        const {message} = await res.json();
        alert(message);
    }

return (
        <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.login_box}>
            <h2><img src={assets.famara_pic} alt="" />Create FMG Account</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.input_box}>
                <input type="text" name='username' required />
                <label>Username</label>
              </div>
              <div className={styles.input_box}>
                <input type="email" name='email' required />
                <label>Email</label>
              </div>
              <div className={styles.input_box}>
                <input type="password" name='password'  required />
                <label>Password</label>
              </div>
              <button type="submit" className={styles.btn} >SignUp</button>
              <div className={styles.signup_link}>
                <Link to='/login'>Login</Link>
              </div>
            </form>
          </div>
        </div>
        </div>
    )
 
}

export default Signup
