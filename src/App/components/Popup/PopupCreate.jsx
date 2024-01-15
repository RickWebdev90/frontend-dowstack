import Popup from "reactjs-popup";
import CurrencyInput from "../Inputs/CurrencyInput";
import DateInput from "../Inputs/DateInput";
import TypeInput from "../Inputs/TypeInput";
import RecurrInput from "../Inputs/RecurrInput";
import TitleInput from "../Inputs/TitleInput";
import fetchBalance from "../user/UserBalance/Index";
import { useState, useEffect } from "react";

export default function PopupCreate() {
  const [type, setType] = useState("Expense");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [recurr, setRecurr] = useState(false);
  const [date, setDate] = useState("");
  const [userBalance, setUserBalance] = useState("");
  const userId = sessionStorage.getItem("userid");
  useEffect(() => {
    fetchBalance(setUserBalance);
  }, []);

  const updateBalance = async (boolean, amount, balance) => {
    const amountReformed = amount.replace(",", ".");
    const amountAsFloat = parseFloat(amountReformed);
    const updatedBalance =
      boolean === "Income" ? balance + amountAsFloat : balance - amountAsFloat;
    const newBalance = {
      userId: userId,
      updateData: {
        balance: updatedBalance,
      },
    };
    const configUpdate = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBalance),
    };
    try {
      const response = await fetch(
        "https://dowstack.onrender.com/users/settings",
        configUpdate
      );
      const data = await response.json();
      console.log("UPDATE BALANCE MSG:", data);
    } catch (err) {
      console.log("creating Ticket failed!", err);
    }
  };

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
    const configCreate = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    };
    try {
      const response = await fetch(
        `https://dowstack.onrender.com/${URLRoute}`,
        configCreate
      );
      const data = await response.json();
      console.log("USER TICKER CREATION:", data);
    } catch (err) {
      console.log("creating Ticket failed!", err);
    }
    c();
  };

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
                <form onSubmit={(e) => e.preventDefault()}>
                  <TypeInput type={type} setType={setType} />
                  <TitleInput title={title} setTitle={setTitle} />
                  <CurrencyInput amount={amount} setAmount={setAmount} />
                  <RecurrInput recurr={recurr} setRecurr={setRecurr} />
                  <DateInput date={date} setDate={setDate} />
                  <button
                    onClick={() => {
                      saveData(close);
                      updateBalance(type, amount, userBalance);
                    }}
                  >
                    Speichern
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      }}
    </Popup>
  );
}
