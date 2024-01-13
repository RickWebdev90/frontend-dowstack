// import React from "react";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";

export default function PopupCreate() {
  //   const navigate = useNavigate();
  //   const [direction, setDirection] = React.useState(null);
  //   const [title, setTitle] = React.useState("");
  //   const [amount, setAmount] = React.useState("");
  //   const [recurring, setRecurring] = React.useState(false);

  //   const handleSwitchChange = () => {
  //     setDirection(direction === "in" ? "out" : "in");
  //   };

  //   const handleSave = () => {
  //     console.log("Gespeichert:", {
  //       direction,
  //       title,
  //       amount,
  //       recurring,
  //     });
  //   };

  return (
    <Popup
      trigger={<button className="userSubmit delete"> ADD ➕ </button>}
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
                <h3>Create a new Entry ✨</h3>
              </div>
            </div>
          </div>
        );
      }}
    </Popup>
  );
}
