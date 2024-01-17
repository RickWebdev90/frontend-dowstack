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
  const path = window.location.pathname;
  if (path === "/savinggoals") {
    return (
      <>
        <div className="SavingGoalEntry">
          <div className="SavingGoalTitle">{title}</div>
          <ProgressBar balance={balance} goal={goal} />
          <div className="SavingGoalCurrentSaving">{`${balance} €`}</div>
          <div className="SavingGoalTarget">{`${goal} €`}</div>

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
  } else {
    return (
      <div className="dashboard-goal app-boxshadow">
        <div className="goal-header">
          <div className="goalheader">
            <h2 className="goaltitle" style={{ color: "black" }}>
              Dein Sparziel:
            </h2>
            <p style={{ color: "" }}>🎉{title}🎉</p>
          </div>
          <div className="goal-container">
            <ProgressBar
              className="progressbar-dashboard"
              balance={balance}
              goal={goal}
            />
            <div className="SavingGoalCurrentSaving-Dashboard">
              <h2>
                {`${balance} €`} / {`${goal} €`}
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SavingGoalsCard;
