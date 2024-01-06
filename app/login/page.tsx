"use client"
 
import axios from "axios";
import { useState } from "react"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    const loginData = { email, password };
    const authUser = async () => {
      try {
        const user = await axios.post(`https://healer.onrender.com/api/auth/login`, loginData);
        console.log(user);
      } catch (err) {
        console.log(err);
      }
    };
    authUser();
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
                Email Address
              </div>
            </div>
            <div className='signin-email_address'>
              <input type='email' className='signin-email_address_box' onChange={(e) => setEmail(e.target.value)} />
            </div>


            <div className='signin-email-box'>
              <div className='signin-email'>
                Password
              </div>
            </div>
            <div className='signin-email_address'>
              <input type='Password' className='signin-email_address_box' onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className='signin-btn-div-box-2'>
              <button type='submit' className='signin-btn' onClick={handleClick}>
                SIGN IN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login