"use client"

import './signup.module.css';
import { useState } from 'react';
import axios from "axios";


function Signup() {
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = async () => {
      const data = { username, email, password };
      const logUser = async () => {
        try {
          const user = await axios.post(`https://healer.onrender.com/api/register`, data);
          console.log(user);
        } catch (err) {
          console.log(err);
        }
      };
      logUser();
    };
  
    return (
      <div className='signin-main-container'>
        <div className='signin-container'>
          <div className='signin-box-1'>
            <div className='signin-heading-div'>
              <div className='signin-heading'>
                Hello, Friend!
              </div>
            </div>
  
            <div className='signin-text-div'>
              <div className='signin-text'>
                Enter your details and start journey with us
              </div>
            </div>
  
            <div className='signin-btn-div'>
              <button type='button'  className='signin-btn'>SIGN UP</button>
            </div>
          </div>
          <div className='signin-box-2'>
            <div className='signin-box-2-heading-div'>
              <div className='signin-box-2-heading'>
                Sign in
              </div>
            </div>
  
            <div className='signin-box-2-formdiv'>
              <div className='signin-email-box'>

              <div className='signin-email'>
                  Your Name
                </div>
              </div>
              <div className='signin-email_address'>
                <input type='text' name="username" className='signin-email_address_box' onChange={(e) => setName(e.target.value)} />
              </div>

                <div className='signin-email'>
                  Email Address
                </div>
              </div>
              <div className='signin-email_address'>
                <input type='email' name="email" className='signin-email_address_box'  onChange={(e) => setEmail(e.target.value)}/>
              </div>
  
  
              <div className='signin-email-box'>
                <div className='signin-email'>
                  Password
                </div>
              </div>
              <div className='signin-email_address'>
                <input type='Password' name="password" className='signin-email_address_box' onChange={(e) => setPassword(e.target.value)}/>
              </div>
  
              <div className='signin-btn-div-box-2'>
              <button type='button' className='signin-btn' onClick={handleClick}>
                SIGN UP
              </button>
            </div>
            </div>
          </div>
        </div>
    )
  }
  
  export default Signup