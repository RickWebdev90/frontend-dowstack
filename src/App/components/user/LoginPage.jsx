import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from "../../hooks/userContext.jsx";

export default function LoginPage() {
  const [successMsg, setSuccessMsg] = useState();
  const [process, setProcess] = useState();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();

  function handleChange() {
    const data = { email: emailRef.current.value, password: passwordRef.current.value };
    sessionStorage.setItem("autosave", JSON.stringify(data));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setProcess(true);
    const userLogin = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    };

    try {
      const response = await fetch("https://dowstack.onrender.com/login", config);
      const data = await response.json();
      if (data.resCode === 0) {
        console.log("Login erfolgreich. Benutzer-ID:", data._id);
        setSuccessMsg(true);
        setUser(data._id);
        navigate("/dashboard");

        const auth = data._id;
        sessionStorage.setItem("userid", auth)


      } else if (data.resCode === 1) {
        console.log("Benutzer nicht gefunden");
        setUser(null);
      }
      console.log("Login erfolgreich", data);
    } catch (err) {
      console.log("Login fehlgeschlagen", err);
      setUser(null);
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
            <input type="email" placeholder='E-Mailadresse' name="email" ref={emailRef} onChange={handleChange} />
          </div>
          <div className="input">
            <input type="password" placeholder='Passwort' name="password" ref={passwordRef} onChange={handleChange} />
          </div>
          <div className="submit-container">
            <button type="submit" className="submit">{process === true ? "Progress..." : "Einloggen"}</button>
            {successMsg && <h4>Benutzer eingeloggt</h4>}
          </div>
        </div>
      </form>
    </div>
  );
}
