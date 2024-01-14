import { useEffect, useState } from "react";
import IncomeCard from "./incomeCard";

function isMongoDBObjectId(id) {
  return (
    typeof id === "string" && id.length === 24 && /^[0-9a-fA-F]+$/.test(id)
  );
}

function IncomeEntry() {
  const [incomeList, setIncomeList] = useState([]);

  useEffect(() => {
    const userId = sessionStorage.getItem("userid");
    console.log("USERID:", userId);
    const fetchData = async () => {
      try {
        if (isMongoDBObjectId(userId)) {
          const response = await fetch(
            `https://dowstack.onrender.com/in/user/${userId}`
          );
          const data = await response.json();
          console.log("data income", data)
          console.log("INCOME DATA 💲", data);
          setIncomeList(data);
        }
      } catch (err) {
        console.error("ERROR while fetching Data:", err.message);
      }
    };
    fetchData();
  }, []);

  const listOfIncome = incomeList?.map((item) => {
    console.log(item);
    return (
      <div key={item._id}>
        <IncomeCard
          title={item.title}
          amount={item.amount}
          recurring={item.recurring}
          date={item.date}
        />
      </div>
    );
  });
  return (
    <div>
      <h1>💰income Entry💰</h1>
      <ul>{listOfIncome}</ul>
    </div>
  );
}
export default IncomeEntry;
