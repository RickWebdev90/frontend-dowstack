import { useEffect } from "react";

const DateInput = ({ date, setDate }) => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  useEffect(() => {
    if (date === "") {
      setDate(formattedDate);
    }
  }, []);

  return (
    <div>
      <input type="date" value={date} onChange={handleDateChange} />
    </div>
  );
};

export default DateInput;
