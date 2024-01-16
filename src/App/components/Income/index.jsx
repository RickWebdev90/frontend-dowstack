import { useEffect, useState } from "react";
import IncomeCard from "./IncomeCard.jsx";

function isMongoDBObjectId(id) {
  return (
    typeof id === "string" && id.length === 24 && /^[0-9a-fA-F]+$/.test(id)
  );
}

function Income({ trigger, setTrigger }) {
  const [incomeList, setIncomeList] = useState([]);

  useEffect(() => {
    const userId = sessionStorage.getItem("userid");
    // console.log("USERID:", userId);
    const fetchData = async () => {
      try {
        if (isMongoDBObjectId(userId)) {
          const response = await fetch(
            `https://dowstack.onrender.com/in/user/${userId}`
          );
          const data = await response.json();
          // console.log("data income", data)
          // console.log("INCOME DATA 💲", data);
          data.msg ? setIncomeList([]) : setIncomeList(data);
        }
      } catch (err) {
        console.error("ERROR while fetching Data:", err.message);
      }
    };
    fetchData();
  }, [trigger]);
  if (incomeList.length > 0) {
    const listOfIncome = incomeList?.map((item) => {
      return (
        <div key={item._id}>
          <IncomeCard
            trigger={trigger}
            setTrigger={setTrigger}
            _id={item._id}
            title={item.title}
            amount={item.amount}
            recurring={item.recurring}
            date={item.creationDate}
          />
        </div>
      );
    });
    return (
      <div className="Income-Cashflow-Container">
        <h1>💰Einnahmen💰</h1>
        <ul>{listOfIncome}</ul>
      </div>
    );
  } else {
    return (
      <div className="Income-Cashflow-Container">
        <h1>💰Einnahmen💰</h1>
        <ul>noch keine Einnahmen</ul>
      </div>
    );
  }
}
export default Income;
