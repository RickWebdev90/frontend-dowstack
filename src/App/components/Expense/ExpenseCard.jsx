import { useState, useEffect } from "react";
import { format } from "date-fns";

const ExpenseCard = ({ _id, title, amount, recurring, date }) => {
  const rawDate = date;
  const parsedDate = new Date(rawDate);
  const formatDate = format(parsedDate, "dd.MM.yyyy");
  const [entryId, setEntryId] = useState("");
  useEffect(() => {
    setEntryId(_id);
  }, []);
  return (
    <>
      <div className="ExpenseEntry">
        <div className="ExpenseTitle">{title}</div>
        <div className="ExpenseAmount">{`${amount} €`}</div>
        <div className="ExpenseStatus">{recurring ? "🔁" : "1️⃣"}</div>
        <div className="ExpenseDate">{formatDate}</div>
        <button
          className="ExpenseButton"
          onClick={() => console.log("Delete Entry with ID: ", entryId)}
        >
          Löschen
        </button>
      </div>
    </>
  );
};

export default ExpenseCard;
