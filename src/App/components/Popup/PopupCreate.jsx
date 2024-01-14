import Popup from "reactjs-popup";
import "./Popup.css";
import { useNavigate } from "react-router-dom";
import CurrencyInput from "../CurrencyInput/Index";

export default function PopupCreate() {
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
              <form>
                <label>Art der Buchung</label>
                <select>
                  <option value="Expense">Ausgabe</option>
                  <option value="Income">Einnahme</option>
                </select>
                <label>Bezeichnung</label>
                <input type="text" required placeholder="Titel" />
                <label>Betrag</label>
                <CurrencyInput />
                <label>Wiederkehrend?</label>
                <input type="radio" />
                <button>Speichern</button>
              </form>
            </div>
          </div>
        );
      }}
    </Popup>
  );
}
