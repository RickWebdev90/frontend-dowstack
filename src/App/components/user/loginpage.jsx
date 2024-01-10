import React, { useState, useRef } from 'react'
import axios from "axios"
import user_icon from "../../assets/login/person.png"
import email_icon from "../../assets/login/email.png"
import password_icon from "../../assets/login/password.png"
import "./loginpage.css"
import { Navigate, useNavigate } from 'react-router-dom'

export default function Loginpage() {

  const [succesMsg, setSuccessMsg] = useState()
  const [process, setProcess] = useState()
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  
  function handleChange(){

    const data = {email: emailRef.current.value, password: passwordRef.current.value}
    sessionStorage.setItem("autosave", JSON.stringify(data))
  }

  async function handleSubmit(e){
    e.preventDefault()
    console.log("submit ")
    setProcess(true)
    const userLogin = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    const config ={
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(userLogin)
    }

    try{
      const response = await fetch("https://dowstack.onrender.com/login", config)
      const data = await response.json()
      if(data.resCode === 0){
        setSuccessMsg(true)
        navigate("/dashboard")
      }else if(data.resCode === 1){
      console.log("user not found")
      }
      console.log("loggin success", data)

    }catch(err){
      console.log("login failed", err)
    }
  }

  return (
    <div className='container'>
      <div className="header">
        <div className="text underline">Login</div>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='E-Mailadresse' name="email" ref={emailRef} onChange={handleChange}/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Passwort' name="password" ref={passwordRef} onChange={handleChange}/>
        </div>
        <div className="submit-container">
          <button  type="submit" className="submit">{process === true ? "Process":"Log In"}</button>
          {succesMsg && <h4>User Logged In</h4>}
        </div>
        </div>
        </form>
      </div>
  )
}
