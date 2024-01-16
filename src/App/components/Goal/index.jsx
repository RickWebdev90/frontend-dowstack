import { useEffect, useState } from "react";
import SavingGoalsCard from "./SavingGoalsCard";

function isMongoDBObjectId(id) {
  return (
    typeof id === "string" && id.length === 24 && /^[0-9a-fA-F]+$/.test(id)
  );
}
function SavingGoalsEntry({ trigger, setTrigger }) {
  const [savingGoalsList, setSavingGoalsList] = useState([]);
  useEffect(() => {
    const userId = sessionStorage.getItem("userid");
    // console.log("USERID:", userId);
    const fetchData = async () => {
      try {
        if (isMongoDBObjectId(userId)) {
          const response = await fetch(
            `https://dowstack.onrender.com/out/user/${userId}`
          );
          const data = await response.json();
          // console.log("EXPENSE DATA 💸", data);
          data.msg ? setSavingGoalsList([]) : setSavingGoalsList(data);
        }
      } catch (err) {
        console.error("ERROR while fetching Data:", err.message);
      }
    };
    fetchData();
  }, [trigger]);
  if (savingGoalsList.length > 0) {
    const listOfSavingGoals = savingGoalsList?.map((item) => {
      console.log(item);
      return (
        <div key={item._id}>
          <SavingGoalsCard
            trigger={trigger}
            setTrigger={setTrigger}
            _id={item._id}
            title={item.title}
            balance={item.balance}
            goal={item.goal}
          />
        </div>
      );
    });
    return (
      <div className="SavingGoals-Container">
        <div className="SavingGoals-Titel-Container">
        <h1>🏁 Deine aktuellen Sparziele 🏁</h1>
        </div>
        <div className="SavingGoals-Spaltentitel">
        <div>Name</div>
        <div>Progress</div>
        <div>Erspartes</div>
        <div>Sparziel</div>
        <div></div>
        <div></div>
        </div>
        <ul>{listOfSavingGoals}</ul>
      </div>
    );
  } else {
    return (
      <div className="SavingGoals-Container">
        <h1>🏁 Deine aktuellen Sparziele 🏁</h1>
        <ul>Noch keine Ziele 🥺</ul>
      </div>
    );
  }
}
export default SavingGoalsEntry;
