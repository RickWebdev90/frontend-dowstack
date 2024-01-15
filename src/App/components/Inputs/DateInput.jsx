const DateInput = ({ date, setDate }) => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
  if (date === "") {
    setDate(formattedDate);
  }
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div className="popup-date">
      <label>
        <input type="date" value={date || ""} style={{height: "4vh"}} onChange={handleDateChange} />
      </label>
    </div>
  );
};

export default DateInput;
