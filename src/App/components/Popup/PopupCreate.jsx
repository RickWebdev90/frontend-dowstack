import Popup from "reactjs-popup";
import CurrencyInput from "../Inputs/CurrencyInput";
import DateInput from "../Inputs/DateInput";
import TypeInput from "../Inputs/TypeInput";
import RecurrInput from "../Inputs/RecurrInput";
import TitleInput from "../Inputs/TitleInput";
// import fetchBalance from "../user/UserBalance/Index";
import updateBalance from "../CRUD/UpdateBalance";
import { useState, useEffect } from "react";

export default function PopupCreate({ trigger, setTrigger, usage }) {
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

  const URLRoute = type === "false" ? "out" : "in";

  //amout reformating before saving
  const amountReformed = amount.replace(",", ".");
  const amountAsFloat = parseFloat(amountReformed);

  //switch for handling usage of popup
  let usedHandler
  let usedRoute
  let newEntry
  switch (usage) {
    case "savingGoals":
      usedHandler = handleSavings,
        usedRoute = "/savings"
        newEntry ={
          user_id: userId,
          title: "savings title"
        }
      break;
    case "cashflow":
      usedHandler = handleCashFlow,
        usedRoute = URLRoute,
        newEntry = {
        user_id: userId,
        title: title,
        date: date,
        amount: amountAsFloat,
        recurring: recurr,
      };
      break;
    case "assets":
      usedHandler = handleAssets,
        usedRoute = "/assets",
        newEntry={
          user_id: userId,
          title: "irgend ein title"
        }
      break;
    default: console.log("no usage ")

  }

  console.log("handle", usedHandler)
  console.log("route", usedRoute)
  const saveData = async (c) => {
    console.log("usedRoute in func", usedRoute)
  
    
  
    const configCreate = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    };
    try {
      const response = await fetch(
        `https://dowstack.onrender.com/${usedRoute}`,
        configCreate
      );
      const data = await response.json();
      console.log("SAVEDDATA:", data);
      console.log("saved TYPE: ", type);
      setTrigger(!trigger);
    } catch (err) {
      console.log("creating Ticket failed!", err);
    }
    c();
  };

  function handleCashFlow(){
      saveData(close);
      updateBalance(userId, type, amount);
  
  }

  function handleSavings(){
    saveData(close)
    console.log("savings handled")
  }

  function handleAssets(){
    saveData(close);
    console.log("assets handled")
  }

  console.log("usage", usage)
  

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
                    onClick={usedHandler}
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
