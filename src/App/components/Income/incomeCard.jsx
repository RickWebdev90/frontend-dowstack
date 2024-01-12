const IncomeCard = ({ title, amount, recurring, date }) => {
  return (
    <>
      <div className="IncomeEntry">
        <div className="IncomeTitle">{title}</div>
        <div className="IncomeAmount">{`${amount} €`}</div>
        <div className="IncomeStatus">{recurring ? "🔁" : "1️⃣"}</div>
        <div className="IncomeDate">{date}</div>
        <button className="IncomeButton">Bearbeiten</button>
      </div>
    </>
  );
};
export default IncomeCard;

//   <div className="blogcard-container">
//     <div className="blogcard-title">
//       <h1 className="blogCardTitle">{title}</h1>
//     </div>
//     <div className="blogcard-intro">
//       <BlogCardRT intro={intro} />
//     </div>
//     <div className="blogcard-imgcontainer">
//       <img
//         className="blogCardImg"
//         src={img.fields.file.url}
//         alt={img.description}
//       />
//     </div>
//   </div>
