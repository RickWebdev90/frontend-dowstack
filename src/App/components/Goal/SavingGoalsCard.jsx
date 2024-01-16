import { useState, useEffect } from "react";
import deleteSavingGoalEntry from "../CRUD/DeleteSavingGoalEntry";  //anpassen für SavingGoals (Kopie)
import updateBalance from "../CRUD/UpdateBalance";
import ProgressBar from "./Progressbar";

const SavingGoalsCard = ({
  trigger,
  setTrigger,
  _id,
  title,
  current,
  target,
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
        <ProgressBar current={current} target={target}/>
        <div className="SavingGoalCurrentSaving">{`${current} €`}</div>
        <div className="SavingGoalTarget">{`${target}`}</div>
        <button
          className="savinggoal-EntryButton"
          onClick={() => {
            deleteSavingGoalEntry(trigger, setTrigger, entryId, "false");
            updateBalance(userId, "true", amount);
          }}
        >
          Einzahlen
        </button>
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
