import React, { useEffect, useState } from "react";
import "../../../app.css";

export default function DashBalance() {
  const auth = sessionStorage.getItem("userid");
  const [balance, setBalance] = useState();

  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dowstack.onrender.com/users/${auth}`,
        config
      );
      const data = await response.json();
      console.log("data", data);
      setBalance(data.balance);
      console.log("balance", data.balance);
    } catch (err) {
      console.log("irgendwas stimmt nicht", err);
    }
  };
  return (
    <div className="dashboard-balance app-boxshadow">
      <h2>Du hast noch {typeof balance !== "number" ? 0 : balance}€ </h2>
      <p>Gönn dir was! 🤑</p>
    </div>
  );
}
