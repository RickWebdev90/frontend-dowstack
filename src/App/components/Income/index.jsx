import { useEffect, useState } from "react";

// const userId = "6595d4eaa045ef760f46dd15";

const userId = sessionStorage.getItem("userid");
function IncomeEntry() {
  const [incomeList, setIncomeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dowstack.onrender.com/in/user/${userId}`
        );
        const data = await response.json();
        console.log("INCOME DATA 💲", data);
        setIncomeList(data);
      } catch (err) {
        console.error("ERROR while fetching Data:", err.message);
      }
    };
    fetchData();
  }, []);

  const listOfIncome = incomeList?.map((item) => {
    console.log(item);
    return <h1 key={item._id}>{item.amount}</h1>;
  });
  return (
    <div>
      <h1>💰income Entry💰</h1>
      <ul>{listOfIncome}</ul>
    </div>
  );
}
export default IncomeEntry;
