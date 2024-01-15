import Popup from "reactjs-popup";
import CurrencyInput from "../Inputs/CurrencyInput";
import DateInput from "../Inputs/DateInput";
import TypeInput from "../Inputs/TypeInput";
import RecurrInput from "../Inputs/RecurrInput";
import { useState } from "react";

export default function PopupCreate() {
  const [type, setType] = useState("Expense");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [recurr, setRecurr] = useState(false);
  const [date, setDate] = useState("");
  console.log("POPUP AMOUNT:", amount);
  console.log("POPUP DATE:", date);
  console.log("POPUP TYPE", type);
  console.log("POPUP TITLE", title);
  console.log("POPUP RECURR", recurr);

  return (
    <Popup
      trigger={<button className="userSubmit delete"> ADD ➕ </button>}
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
                <h3>Create a new Entry ✨</h3>
              </div>
              <form>
                <label>Art der Buchung</label>
                <TypeInput type={type} setType={setType} />
                <label>Bezeichnung</label>
                <input type="text" required placeholder="Titel" />
                <label>Betrag</label>
                <CurrencyInput amount={amount} setAmount={setAmount} />
                <RecurrInput recurr={recurr} setRecurr={setRecurr} />
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
