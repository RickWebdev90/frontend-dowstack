import React, { useRef, useState } from 'react'
import user_icon from "../../../src/app/assets/login/person.png"
import email_icon from "../../../src/app/assets/login/email.png"
import password_icon from "../../../src/app/assets/login/password.png"
import "./registration.css"
import { Navigate, useNavigate } from 'react-router-dom'

export default function Registration() {

  const [succesMsg, setSuccessMsg] = useState(false)
  const [process, setProcess] = useState()
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  async function handleRegister(e) {
      e.preventDefault()
      setProcess(true)
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
        const response = await fetch("https://dowstack.onrender.com/register", config)
        const data = await response.json() 
        if(data.resCode === 0){
          setSuccessMsg(true)
          navigate("/login")
        }else if(data.resCode === 1){
        console.log("rescode duplicate")
        }
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
          <button type='submit'className='submit'>{process === true ? "Process":"Absenden"}</button>
          {succesMsg && <h4>user succesfull registered</h4>}
        </div>
      </form>
    </div>
  )
}
