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
      trigger={<button className="cashflow-add-button"> ADD ➕ </button>}
      modal
      nested
    >
      {(close) => {
        return (
          <div className="cashflow-modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="cashflow-modal-container">
              <div className="header">
                <h3>Neuen Eintrag erstellen ✨</h3>
              </div>
              <div className="cashflow-popup-inputs">
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
          </div>
        );
      }}
    </Popup>
  );
}
