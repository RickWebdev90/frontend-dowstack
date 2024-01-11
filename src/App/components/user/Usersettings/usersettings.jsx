import React, { useState, useEffect } from "react";
import "../loginpage.css";
import PopupDelete from "./PopupDelete";
import { useUserContext } from "../../../hooks/userContext";

export default function Usersettings() {
  const [action, setAction] = useState(true);
  const { user } = useUserContext();
  

  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dowstack.onrender.com/users/${user}`, config);
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      console.log("Da stimmt was nicht", err);
    }
  };

  const handleUpdate = async () => {
    const updateData = {
      userId:user, 
      updateData:{
      username: userData.username,
      password: userData.password,
      }
    };

    const updateConfig = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    };

    try {
      const response = await fetch('https://dowstack.onrender.com/users/settings', updateConfig);
      const updatedData = await response.json();
      console.log("Update successful", updatedData);
      setAction(true);
    } catch (err) {
      console.log("Update failed", err);
    }
  };

  return (
    <div className="usersettings">
      <div className="usersettings-title">
        <h1>Usersettings</h1>
      </div>
      <div className="inputs">
        <div className={action === true ? "inputGray" : "inputSettings"}>
          <label className="input-label">Name:</label>
          <input
            type="text"
            readOnly={action}
            value={userData.username}
            onChange={(e) => setUserData({ ...userData, username: e.target.value })}
          />
        </div>
        <div className="inputGray">
          <label className="input-label">E-Mail:</label>
          <input type="email" readOnly={true} value={userData.email} />
        </div>
        <div className={action === true ? "inputGray" : "inputSettings"}>
          <label className="input-label">Passwort:</label>
          <input
            type="password"
            readOnly={action}
            placeholder="Hier neues Passwort eingeben"
            
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
        </div>
        <div className="submit-container">
          <button
            className="userSubmit change"
            onClick={() => {
              setAction(false);
            }}
          >
            Bearbeiten
          </button>
          <button
            className="userSubmit save"
            onClick={() => {
              handleUpdate();
            }}
          >
            Speichern
          </button>
        </div>
        <div className="delete-container">
          <PopupDelete />
        </div>
      </div>
    </div>
  );
}
