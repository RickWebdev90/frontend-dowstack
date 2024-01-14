import { useEffect, useState } from "react";
import ExpenseCard from "./expenseCard";

function isMongoDBObjectId(id) {
  return (
    typeof id === "string" && id.length === 24 && /^[0-9a-fA-F]+$/.test(id)
  );
}

function ExpenseEntry() {
  const [expenseList, setExpenseList] = useState([]); // Angepasster Zustand

  useEffect(() => {
    const userId = sessionStorage.getItem("userid");
    console.log("USERID:", userId);
    const fetchData = async () => {
      try {
        if (isMongoDBObjectId(userId)) {
          const response = await fetch(
            `https://dowstack.onrender.com/out/user/${userId}` // Angepasste URL für Ausgaben
          );
          const data = await response.json();
          console.log("EXPENSE DATA 💸", data); // Angepasste Ausgabe
          setExpenseList(data.msg ? [] : data);
        }
      } catch (err) {
        console.error("ERROR while fetching Data:", err.message);
      }
    };
    fetchData();
  }, []);

  const listOfExpenses = expenseList?.map((item) => {
    console.log(item);
    return (
      <div key={item._id}>
        <ExpenseCard // Angepasster Komponentenaufruf
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
      <h1>💸 Expense Entry 💸</h1> {/* Angepasster Überschrift */}
      <ul>{listOfExpenses}</ul>
    </div>
  );
}
export default ExpenseEntry;
