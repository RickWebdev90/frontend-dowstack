import React from 'react'
import Popup from "reactjs-popup"
import "../loginpage.css"

export default function PopupDelete() {
  return (
        <Popup trigger={<button className="userSubmit delete"> Account löschen </button>} modal nested>
          {close => {
            return (
              <div className="delete-modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="delete-modal-container">
                <div className="header"> <h3>Account löschen</h3></div>
                <div className="content">
                  {' '}
                  <p>Bist du dir sicher,dass du deinen Account löschen willst?</p>
                </div>
                <div className="actions">
                  <Popup trigger={<button className="userSubmit delete"> Account löschen </button>} position="top center" nested>
                    //delete request hier!
                  </Popup>
                  <button
                    className="userSubmit save"
                    onClick={() => {
                      console.log('modal closed ');
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
    };