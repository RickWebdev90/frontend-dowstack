import { useEffect, useState } from "react";
import ExpenseCard from "./ExpenseCard.jsx";

function isMongoDBObjectId(id) {
  return (
    typeof id === "string" && id.length === 24 && /^[0-9a-fA-F]+$/.test(id)
  );
}
function ExpenseEntry() {
  const [expenseList, setExpenseList] = useState([]);
  useEffect(() => {
    const userId = sessionStorage.getItem("userid");
    console.log("USERID:", userId);
    const fetchData = async () => {
      try {
        if (isMongoDBObjectId(userId)) {
          const response = await fetch(
            `https://dowstack.onrender.com/out/user/${userId}`
          );
          const data = await response.json();
          console.log("EXPENSE DATA 💸", data);
          data.msg ? setExpenseList([]) : setExpenseList(data);
        }
      } catch (err) {
        console.error("ERROR while fetching Data:", err.message);
      }
    };
    fetchData();
  }, []);
  if (expenseList.length > 0) {
    const listOfExpenses = expenseList?.map((item) => {
      console.log(item);
      return (
        <div key={item._id}>
          <ExpenseCard
            title={item.title}
            amount={item.amount}
            recurring={item.recurring}
            date={item.date}
          />
        </div>
      );
    });
    return (
      <div className="Expense-Cashflow-Container">
        <h1>💸 Ausgaben 💸</h1>
        <ul>{listOfExpenses}</ul>
      </div>
    );
  } else {
    return (
      <div className="Expense-Cashflow-Container">
        <h1>💸 Ausgaben 💸</h1>
        <ul>Noch keine Ausgaben</ul>
      </div>
    );
  }
}
export default ExpenseEntry;
