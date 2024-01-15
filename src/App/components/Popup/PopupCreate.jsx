import Popup from "reactjs-popup";
import CurrencyInput from "../Inputs/CurrencyInput";
import DateInput from "../Inputs/DateInput";
import TypeInput from "../Inputs/TypeInput";
import RecurrInput from "../Inputs/RecurrInput";
import TitleInput from "../Inputs/TitleInput";
import { useState } from "react";

export default function PopupCreate() {
  const [type, setType] = useState("Expense");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [recurr, setRecurr] = useState(false);
  const [date, setDate] = useState("");
  const userId = sessionStorage.getItem("userid");

  const saveData = async (c) => {
    const URLRoute = type === "Expense" ? "out" : "in";
    const amountReformed = amount.replace(",", ".");
    const amountAsFloat = parseFloat(amountReformed);
    const newEntry = {
      user_id: userId,
      title: title,
      date: date,
      amount: amountAsFloat,
      recurring: recurr,
    };
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    };
    try {
      const response = await fetch(
        `https://dowstack.onrender.com/${URLRoute}`,
        config
      );
      const data = await response.json();
    } catch (err) {
      console.log("creating Ticket failed!", err);
    }
    c();
  };

  return (
    <Popup
      trigger={<button className="userSubmit delete"> ADD + </button>}
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
              <form onSubmit={(e) => e.preventDefault()}>
                <TypeInput type={type} setType={setType} />
                <TitleInput title={title} setTitle={setTitle} />
                <CurrencyInput amount={amount} setAmount={setAmount} />
                <RecurrInput recurr={recurr} setRecurr={setRecurr} />
                <DateInput date={date} setDate={setDate} />
                <button onClick={() => saveData(close)}>Speichern</button>
              </form>
            </div>
          </div>
        );
      }}
    </Popup>
  );
}
