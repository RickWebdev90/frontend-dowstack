import { useState, useEffect } from "react";
import { format } from "date-fns";
import deleteEntry from "../CRUD/DeleteEntry";
import updateBalance from "../CRUD/UpdateBalance";

const ExpenseCard = ({
  trigger,
  setTrigger,
  _id,
  title,
  amount,
  recurring,
  date,
}) => {
  const rawDate = date;
  const parsedDate = new Date(rawDate);
  const formatDate = format(parsedDate, "dd.MM.yyyy");
  const userId = sessionStorage.getItem("userid");
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

export default ExpenseCard;
