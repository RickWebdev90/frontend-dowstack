import { useState, useEffect } from "react";
import { format } from "date-fns";
import deleteEntry from "../CRUD/DeleteEntry";

const IncomeCard = ({ _id, title, amount, recurring, date }) => {
  const rawDate = date;
  const parsedDate = new Date(rawDate);
  const formatDate = format(parsedDate, "dd.MM.yyyy");
  const [entryId, setEntryId] = useState("");
  useEffect(() => {
    setEntryId(_id);
  }, []);
  return (
    <>
      <div className="IncomeEntry">
        <div className="IncomeTitle">{title}</div>
        <div className="IncomeAmount">{`${amount} €`}</div>
        <div className="IncomeStatus">{recurring ? "🔁" : "1️⃣"}</div>
        <div className="IncomeDate">{formatDate}</div>
        <button
          className="IncomeButton"
          onClick={() => {
            deleteEntry(entryId, "Income");
          }}
        >
          Löschen
        </button>
      </div>
    </>
  );
};
export default IncomeCard;
