import Popup from "reactjs-popup";
import CurrencyInput from "../Inputs/CurrencyInput";
import DateInput from "../Inputs/DateInput";
import TypeInput from "../Inputs/TypeInput";
import RecurrInput from "../Inputs/RecurrInput";
import TitleInput from "../Inputs/TitleInput";
import GoalInput from "../Inputs/GoalInput";
import StartInput from "../Inputs/StartGoalInput";
// import fetchBalance from "../user/UserBalance/Index";
import updateBalance from "../CRUD/UpdateBalance";
import { useState, useEffect } from "react";

export default function PopupCreate({ trigger, setTrigger, usage }) {
  const [type, setType] = useState("false");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [recurr, setRecurr] = useState(false);
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");
  const [balance, setBalance] = useState(""); 
  const [goal, setGoal] = useState(""); 
  const [start, setStart] = useState("")
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
   let method
   switch (usage) {
     case "savingGoals":
       usedHandler = handleSavings,
         usedRoute = "/saving"
         method = "POST"
         newEntry ={
           user_id: userId,
           title: title,
           balance: balance,
           goal: goal,
         }
       break;
       case "savingGoalsUpdate":
       usedHandler = handleSavingsUpdate,
         usedRoute = "/saving"
         method = "PUT"
         newEntry ={
           user_id: userId,
           title: title,
           balance: balance,
           goal: goal,
         }
       break;
     case "cashflow":
       usedHandler = handleCashFlow,
         usedRoute = URLRoute,
         method = "POST"
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
         method = "POST"
         newEntry={
           user_id: userId,
           title: title,
           value: value,
         }
       break;
       case "assets":
       usedHandler = handleAssetsUpdate,
         usedRoute = "/assets",
         method = "PUT"
         newEntry={
           user_id: userId,
           title: title,
           value: value,
         }
       break;
     default: console.log("no usage ")
 
   }
   console.log("handle", usedHandler)
   console.log("route", usedRoute)
   console.log("newEntry", newEntry)
  const saveData = async (c) => {
    console.log("usedRoute in func", usedRoute)

    const configCreate = {
      method: method,
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
  updateBalance(userId, type, amount);
  console.log("savings handled")
}

function handleSavingsUpdate(){
  saveData(close)
  updateBalance(userId, type, amount);
  console.log("savings handled")
}

function handleAssets(){
  saveData(close);
  console.log("assets handled")
}

function handleAssetsUpdate(){
  saveData(close)
  updateBalance(userId, type, amount);
  console.log("savings handled")
}

console.log("usage", usage)
const custom ={
  className: usage === "savingGoalsUpdate" ? "savinggoal-EntryButton" : "cashflow-add-button",
  title: usage === "savingGoalsUpdate" ? "Einzahlen" : "Add +"
}


  return (
    <Popup
      trigger={<button className={custom.className}>{custom.title}</button>}
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
                 {usage === "cashflow" ? <TypeInput type={type} setType={setType} /> : null}
                  {usage === "savingGoalsUpdate"? null: <TitleInput title={title} setTitle={setTitle} />}
                  {usage === "savingGoals"? <StartInput start={start} setStart={setStart} /> : <CurrencyInput amount={amount} setAmount={setAmount} />}
                  {usage === "savingGoals"?<GoalInput goal={goal} setGoal={setGoal} /> :null}
                  {usage === "cashflow"? <RecurrInput recurr={recurr} setRecurr={setRecurr} /> :null}
                  {usage === "savingGoals" || "savingGoalsUpdate" ?null : <DateInput date={date} setDate={setDate} />}
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
