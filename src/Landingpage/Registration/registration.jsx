import React, { useState } from 'react'
import user_icon from "../../../src/app/assets/login/person.png"
import email_icon from "../../../src/app/assets/login/email.png"
import password_icon from "../../../src/app/assets/login/password.png"
import "./registration.css"

export default function Registration() {

  const [action, setAction] = useState("Registration"); 

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
        </div>
      </div>
    </div>
  )
}
