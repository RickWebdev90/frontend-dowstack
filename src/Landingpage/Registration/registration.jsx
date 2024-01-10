import React, { useRef } from 'react'
import user_icon from "../../../src/app/assets/login/person.png"
import email_icon from "../../../src/app/assets/login/email.png"
import password_icon from "../../../src/app/assets/login/password.png"
import "./registration.css"
import { Navigate } from 'react-router-dom'

export default function Registration() {

  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleRegister(e) {
      e.preventDefault()

      const newUser = {
        username: usernameRef.current.value,
        email: emailRef.current.value, 
        password: passwordRef.current.value, 
        balance: 0
      }

      const config ={
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body:JSON.stringify(newUser)
          
      }
      try{
        const data = await fetch("https://dowstack.onrender.com/register", config)
        console.log("data submitted", data)

      }catch(err){

        console.log("registration failed", err)

      }
  }

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Registrieren</div>
      </div>
      <form onSubmit={handleRegister} className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name' name="username" ref={usernameRef}/>
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='E-Mailadresse' name="email" ref={emailRef} />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Passwort' name="password" ref={passwordRef}/>
        </div>
        <div className="submit-container">
          <button type='submit'className='submit'>Absenden</button>
        </div>
      </form>
    </div>
  )
}
