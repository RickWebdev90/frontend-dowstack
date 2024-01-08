import React, { useState } from 'react'
import "./loginpage.css"

export default function Usersettings() {

  const [action, setAction] = useState(true); 

  return (
    <div className='usersettings'>
      <div className='usersettings-title'>
      <h1>Usersettings</h1>
      </div>
      <div className="inputs">
        <div className={action===true?"inputGray":"inputSettings"}>
        <label className='input-label'>Name:</label><input type="text" readOnly={action}/>
        </div>
        <div className={action===true?"inputGray":"inputSettings"}>
        <label className='input-label'>E-Mail:</label><input type="email" readOnly={action}/>
        </div>
        <div className={action===true?"inputGray":"inputSettings"}>
        <label className='input-label'>Passwort:</label><input type="password" readOnly={action}/>
        </div>
        <div className="submit-container">
          <button className="userSubmit change" onClick={()=>{setAction(false)}}>Bearbeiten</button>
          <button className="userSubmit save" onClick={()=>{setAction(true)}}>Speichern</button>
        </div>
        <div className='delete-container'>  
          <button className="userSubmit delete">Account Löschen</button>
        </div>
      </div>
    </div>
  )
}
