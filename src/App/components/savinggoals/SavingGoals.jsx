import React, { useState } from "react";
import SavingGoalsBalance from "./SavingGoalsBalance.jsx";
import SavingGoalsEntry from "../Goal/SavingGoalsEntry.jsx";
import PopupCreate from "../Popup/PopupCreate.jsx";

export default function SavingGoals() {
  const [trigger, setTrigger] = useState(false);
  return (
    <div>
      <div className="SavingGoals-Page">
        <div className="sparziele-title">
          <h1>Deine Sparziele</h1>
        </div>
        <div className="SavingGoals-Balance-Container">
          <SavingGoalsBalance />
        </div>
        <div className="SavingGoals-Add-Button">
          <PopupCreate
            setTrigger={setTrigger}
            trigger={trigger}
            usage="savingGoals"
          />
        </div>
        <div className="SavingGoals-Container-Page">
          <SavingGoalsEntry setTrigger={setTrigger} trigger={trigger} />
        </div>
      </div>
    </div>
  );
}
