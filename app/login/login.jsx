import React from 'react'
import './login.modules.css'

export const login = () => {
  return (
    
    <div className="maincontainer">

        <div className="container">

            <div className="frame109">
                <p className='hello'>Hello, Friend!</p>
                <p className='enter'>Enter your details and start journey with us</p>
                <button className="signupbutton">
                            SIGN UP
                        </button>
            </div>

            <div className="leftcontainer">

                    <div className="lefttitle">
                        <p>Create Account</p>
                    </div>
                    <div className="leftinfo">
                        
                        <label>Email Address</label>
                        <div><input className="signupemail" type="email" placeholder='abc@gmail.com' /></div>

                        <label>Password</label>
                        <div><input className="signuppassword" type="password" placeholder='pank****' /></div>

                        {/* <div className="leftsignupbutton">
                            <p>SIGN UP</p>
                        </div> */}
                        <button className="signinbutton">
                            SIGN UP
                        </button>
                        

                    </div>

                </div>

        </div>
    </div>
  )
}

export default login
