import React from 'react'
import "./loginpage.css"

export default function Usersettings() {
  return (
    <div className='usersettings'>
      <div className='usersettings-title'>
      <h1>Usersettings</h1>
      </div>
      <div className="inputs">
        <div className="input">
        <label>Name</label><input type="text" />
        </div>
        <div className="input">
        <label>E-Mail: </label><input type="text" />
        </div>
        <div className="input">
        <label>Passwort: </label><input type="text" />
        </div>
        <div className="submit-container">
          <button className="userSubmit change">Bearbeiten</button>
          <button className="userSubmit save">Speichern</button>
        </div>
      </div>
    </div>
  )
}
