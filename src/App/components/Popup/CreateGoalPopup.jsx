import Popup from "reactjs-popup";
import CurrencyInput from "../Inputs/CurrencyInput";
import DateInput from "../Inputs/DateInput";
import TypeInput from "../Inputs/TypeInput";
import RecurrInput from "../Inputs/RecurrInput";
import TitleInput from "../Inputs/TitleInput";
// import fetchBalance from "../user/UserBalance/Index";
import updateBalance from "../CRUD/UpdateBalance";
import { useState, useEffect } from "react";

export default function PopupCreate({ trigger, setTrigger }) {
  const [type, setType] = useState("false");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [recurr, setRecurr] = useState(false);
  const [date, setDate] = useState("");
  // const [userBalance, setUserBalance] = useState("");
  const userId = sessionStorage.getItem("userid");
  useEffect(() => {
    // fetchBalance(setUserBalance);
  }, [trigger]);

  const saveData = async (close) => {
    const URLRoute = "savinggoals";

    const amountReformed = amount.replace(",", ".");
    const amountAsFloat = parseFloat(amountReformed);
    const newEntry = {
      user_id: userId,
      title: title,
      CreationDate: date,
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
      console.log("SAVEDDATA:", data);
      setTrigger(!trigger);
    } catch (err) {
      console.log("creating Ticket failed!", err);
    }
    close();
  };

  return (
    <Popup
      trigger={<button className="cashflow-add-button"> ADD + </button>}
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
                <h3>Neuen Sparziel erstellen ✨</h3>
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
                      updateBalance(userId, type, amount);
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
