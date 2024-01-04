import React, { useState } from 'react'
import user_icon from "../../assets/login/person.png"
import email_icon from "../../assets/login/email.png"
import password_icon from "../../assets/login/password.png"
import "./loginpage.css"

export default function Loginpage() {

  const [action, setAction] = useState("Login"); 

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name'/>
        </div>}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='E-Mailadresse' />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Passwort'/>
        </div>
        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Registration")}}>Registration</div>
          <div className={action==="Registration"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
      </div>
    </div>
  )
}
