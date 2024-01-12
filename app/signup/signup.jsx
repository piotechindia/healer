import React from 'react'
import './signup.modules.css'

export const signup=()=>{
  return (

    <div className="container1">
        
        <div className="container2">

            <div className="container3">

                <div className="leftcontainer">

                    <div className="lefttitle">
                        <p>Create Account</p>
                    </div>
                    <div className="leftinfo">
                        
                        <label>Your Name</label>
                        <div><input className="signupname" type="text" placeholder='Pihu Verma' /></div>

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

                <div className="rightcontainer">
                    <p className='hello'>Welcome Back!</p>
                    <p className='enter'>To keep connected please lgoin with your personal info</p>
                    <button className="signupbutton">
                                SIGN IN
                    </button>
                </div>

            </div>

        </div>

    </div>

  )
}

export default signup