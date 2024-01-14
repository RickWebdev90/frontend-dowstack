const DateInput = ({ date, setDate }) => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
  if (date === undefined) {
    setDate(formattedDate);
  }
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div>
      <label>
        Datum:
        <input type="date" value={date} onChange={handleDateChange} />
      </label>
    </div>
  );
};

export default DateInput;
