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
        <div className={action==="Login"?"gray":"text underline"} onClick={()=>{setAction("Absenden")}}>Registration</div>
        <div className={action==="Absenden"?"gray":"text underline"} onClick={()=>{setAction("Login")}}>Login</div>
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
          <div className={action==="Registration"?"submit gray":"submit"}>{action}</div>
        </div>
      </div>
    </div>
  )
}
