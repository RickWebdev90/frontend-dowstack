import React from "react";
import Popup from "reactjs-popup";
import "../loginpage.css";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../hooks/userContext";

export default function PopupDelete() {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const deleteData = {
      userId: user,
    };

    const deleteConfig = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deleteData),
    };

    try {
      const response = await fetch(
        "https://dowstack.onrender.com/users/delete",
        deleteConfig
      );
      const deleteUser = await response.json();
      console.log("Delete successful", deleteUser);
      setUser(null);
      navigate("/");
    } catch (err) {
      console.log("Delete failed", err);
    }
  };

  return (
    <Popup
      trigger={<button className="userSubmit delete"> Account löschen </button>}
      modal
      nested
    >
      {(close) => {
        return (
          <div className="delete-modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="delete-modal-container">
              <div className="header">
                {" "}
                <h3>Account löschen</h3>
              </div>
              <div className="content">
                {" "}
                <p>Bist du dir sicher,dass du deinen Account löschen willst?</p>
              </div>
              <div className="actions">
                <button
                  className="userSubmit delete"
                  onClick={() => {
                    handleDelete();
                  }}
                >
                  {" "}
                  Account löschen{" "}
                </button>
                <button
                  className="userSubmit save"
                  onClick={() => {
                    console.log("modal closed ");
                    close();
                  }}
                >
                  Account Behalten
                </button>
              </div>
            </div>
          </div>
        );
      }}
    </Popup>
  );
}
