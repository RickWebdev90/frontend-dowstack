const ExpenseCard = ({ title, amount, recurring, date }) => {
  return (
    <>
      <div className="ExpenseEntry">
        <div className="ExpenseTitle">{title}</div>
        <div className="ExpenseAmount">{`${amount} €`}</div>
        <div className="ExpenseStatus">{recurring ? "🔁" : "1️⃣"}</div>
        <div className="ExpenseDate">{date}</div>
        <button className="ExpenseButton">Bearbeiten</button>
      </div>
    </>
  );
};

export default ExpenseCard;
