import { useState, useEffect } from "react";
import deleteSavingGoalEntry from "../CRUD/DeleteSavingGoalEntry";  //anpassen für SavingGoals (Kopie)
import updateBalance from "../CRUD/UpdateBalance";
import ProgressBar from "./Progressbar";
import PopupCreate from "../Popup/PopupCreate";

const SavingGoalsCard = ({
  trigger,
  setTrigger,
  _id,
  title,
  balance,
  goal,
}) => {
  const userId = sessionStorage.getItem("userid");
  const [entryId, setEntryId] = useState("");
  useEffect(() => {
    setEntryId(_id);
  }, []);
  return (
    <>
      <div className="SavingGoalEntry">
        <div className="SavingGoalTitle">{title}</div>
        <ProgressBar balance={balance} target={goal}/>
        <div className="SavingGoalCurrentSaving">{`${balance} €`}</div>
        <div className="SavingGoalTarget">{`${goal}`}</div>
       
            <PopupCreate setTrigger={setTrigger} trigger={trigger} usage="savingGoalsUpdate"/>
  
    
        <button
          className="savinggoal-DeleteButton"
          onClick={() => {
            deleteEntry(trigger, setTrigger, entryId, "false");
            updateBalance(userId, "true", amount);
          }}
        >
          Löschen
        </button>
      </div>
    </>
  );
};

export default SavingGoalsCard;
