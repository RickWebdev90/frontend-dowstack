import React, { useEffect, useState } from "react";
import "../../../app.css";

export default function CashFlowBalance({ trigger }) {
  const auth = sessionStorage.getItem("userid");
  const [balance, setBalance] = useState();

  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    console.log("TRIGGER IN BALANCE KOMP WIRD GEPULLT BRUDI");
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dowstack.onrender.com/users/${auth}`,
          config
        );
        const data = await response.json();
        console.log("data balance in BALANCE", data.balance);
        setBalance(data.balance);
        // setTrigger(!trigger);
        // console.log("balance", data.balance);
        console.log("BALANCETRIGGER:", trigger, balance);
      } catch (err) {
        console.log("irgendwas stimmt nicht", err);
      }
    };
    fetchData();
  }, [trigger]);

  return (
    <div className="dashboard-balance app-boxshadow">
      <h2>
        Du hast diesen Monat noch {typeof balance !== "number" ? 0 : balance}€
      </h2>
    </div>
  );
}
