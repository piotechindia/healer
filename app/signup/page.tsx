"use client"

import { useState } from 'react';
import './signup.module.css';
import axios from 'axios';


export default function SignupPage() {

  const [inputs, setInputs] = useState({});

  // Function to take login details
  const handleInput = (e: { target: { name: any; value: any; }; }) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://piotechbackend.onrender.com/api/users/create", inputs)
      console.log(res)
      alert(res.data)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
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
              <button type='button' className='signin-btn'>SIGN UP</button>
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
                <input type='text' name="name" className='signin-email_address_box' onChange={handleInput} />
              </div>

              <div className='signin-email'>
                Email Address
              </div>
            </div>
            <div className='signin-email_address'>
              <input type='email' name="email" className='signin-email_address_box' onChange={handleInput} />
            </div>


            <div className='signin-email-box'>
              <div className='signin-email'>
                Password
              </div>
            </div>
            <div className='signin-email_address'>
              <input type='Password' name="password" className='signin-email_address_box' onChange={handleInput} />
            </div>

            <div className='signin-btn-div-box-2'>
              <button type='submit' className='signin-btn' onClick={handleClick}>
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}