import Popup from "reactjs-popup";
import CurrencyInput from "../Inputs/CurrencyInput";
import DateInput from "../Inputs/DateInput";
import TypeInput from "../Inputs/TypeInput";
import RecurrInput from "../Inputs/RecurrInput";
import TitleInput from "../Inputs/TitleInput";
import GoalInput from "../Inputs/GoalInput";
import StartInput from "../Inputs/StartGoalInput";
import updateBalance from "../CRUD/UpdateBalance";
import { useState, useEffect } from "react";

export default function PopupCreate({
  trigger,
  setTrigger,
  usage,
  optionalData = "",
}) {
  const [type, setType] = useState("false");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [recurr, setRecurr] = useState(false);
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");
  const [balance, setBalance] = useState("");
  const [goal, setGoal] = useState("");
  const userId = sessionStorage.getItem("userid");

  useEffect(() => {}, [trigger]);

  const URLRoute = type === "false" ? "out" : "in";
  const amountReformed = amount.replace(",", ".");
  const amountAsFloat = parseFloat(amountReformed);

  let usedHandler;
  let usedRoute;
  let newEntry;
  let method;

  switch (usage) {
    case "savingGoals":
      (usedHandler = handleSavings), (usedRoute = "savinggoals");
      method = "POST";
      newEntry = {
        user_id: userId,
        title: title,
        creationDate: date,
        balance: balance,
        goal: goal,
      };
      break;
    case "cashflow":
      (usedHandler = handleCashFlow), (usedRoute = URLRoute), (method = "POST");
      newEntry = {
        user_id: userId,
        title: title,
        creationDate: date,
        amount: amountAsFloat,
        recurring: recurr,
      };
      break;
    case "savingGoalsUpdate":
      (usedHandler = handleSavingsUpdate), (usedRoute = "savinggoals");
      method = "PUT";
      newEntry = {
        _id: optionalData.id,
        updateData: {
          balance: optionalData.balance + amountAsFloat,
        },
      };
      break;
    default:
      console.log("no usage ");
  }
  const saveData = async (close) => {
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
      await response.json();
      setTrigger(!trigger);
    } catch (err) {
      console.log("Saving Data failed❗️", err);
    }
    close();
  };

  function handleCashFlow(close) {
    saveData(close);
    updateBalance(userId, type, amount);
  }
  function handleSavings(close) {
    saveData(close);
  }
  function handleSavingsUpdate(close) {
    saveData(close);
  }

  const custom = {
    className:
      usage === "savingGoalsUpdate"
        ? "savinggoal-EntryButton"
        : "cashflow-add-button",
    title: usage === "savingGoalsUpdate" ? "Einzahlen" : "Add +",
  };

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
                  {usage === "cashflow" ? (
                    <TypeInput type={type} setType={setType} />
                  ) : null}
                  {usage === "cashflow" ? (
                    <TitleInput title={title} setTitle={setTitle} />
                  ) : null}
                  {usage === "savingGoals" ? (
                    <TitleInput title={title} setTitle={setTitle} />
                  ) : null}
                  {usage === "savingGoals" ? (
                    <StartInput balance={balance} setBalance={setBalance} />
                  ) : (
                    <CurrencyInput amount={amount} setAmount={setAmount} />
                  )}
                  {usage === "cashflow" ? (
                    <RecurrInput recurr={recurr} setRecurr={setRecurr} />
                  ) : null}
                  {usage === "cashflow" ? (
                    <DateInput date={date} setDate={setDate} />
                  ) : null}
                  {usage === "savingGoals" ? (
                    <GoalInput goal={goal} setGoal={setGoal} />
                  ) : null}
                  {usage === "savingGoals" ? (
                    <DateInput date={date} setDate={setDate} />
                  ) : null}
                  <button onClick={() => usedHandler(close)}>Speichern</button>
                </form>
              </div>
            </div>
          </div>
        );
      }}
    </Popup>
  );
}
