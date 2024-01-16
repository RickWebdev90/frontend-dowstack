import { useEffect } from "react";
import deleteSavingGoalEntry from "../CRUD/DeleteSavingGoalEntry"; //anpassen für SavingGoals (Kopie)
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
  useEffect(() => {}, [trigger]);
  return (
    <>
      <div className="SavingGoalEntry">
        <div className="SavingGoalTitle">{title}</div>
        <ProgressBar balance={balance} goal={goal} />
        <div className="SavingGoalCurrentSaving">{`${balance} €`}</div>
        <div className="SavingGoalTarget">{`${goal}`}</div>

        <PopupCreate
          setTrigger={setTrigger}
          trigger={trigger}
          usage="savingGoalsUpdate"
          optionalData={{ id: _id, balance: balance }}
        />

        <button
          className="savinggoal-DeleteButton"
          onClick={() => {
            deleteSavingGoalEntry(trigger, setTrigger, _id);
            console.log("DELETEBUTTON GOALS:", _id);
          }}
        >
          Löschen
        </button>
      </div>
    </>
  );
};

export default SavingGoalsCard;
