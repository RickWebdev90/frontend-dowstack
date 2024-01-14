import Popup from "reactjs-popup";
import CurrencyInput from "../CurrencyInput/Index";
import DateInput from "../DateInput/Index";
import { useState } from "react";

export default function PopupCreate() {
  const [type, setType] = useState(undefined);
  const [title, setTitle] = useState(undefined);
  const [amount, setAmount] = useState(undefined);
  const [recurr, setRecurr] = useState(undefined);
  const [date, setDate] = useState(undefined);
  console.log("POPUP AMOUNT:", amount);
  console.log("POPUP DATE:", date);

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
                <CurrencyInput amount={amount} setAmount={setAmount} />
                <label>Wiederkehrend?</label>
                <input type="radio" />
                <DateInput date={date} setDate={setDate} />
                <button>Speichern</button>
              </form>
            </div>
          </div>
        );
      }}
    </Popup>
  );
}
