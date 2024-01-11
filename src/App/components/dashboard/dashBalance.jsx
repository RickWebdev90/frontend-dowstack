import React, { useEffect, useState } from 'react'
import { useUserContext } from "../../hooks/userContext";

export default function DashBalance() {
    const auth = sessionStorage.getItem("userid")
    const [balance, setBalance] = useState()
    const { user } = useUserContext();
    console.log("auth:", auth)
    console.log("useContext", user)

    const config = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    useEffect(()=>{
        fetchData();
    }, []); 

    const fetchData = async () => {
        try{
            console.log("zeile23", auth)
            const response = await fetch(`https://dowstack.onrender.com/users/${auth}`, config);
            const data = await response.json(); 
            console.log("data", data)
            setBalance(data.balance)
            console.log("balance", data.balance)
        }catch(err) {
        console.log("irgendwas stimmt nicht", err);
    }
    }; 
  return (
    <div>
      <h1>{balance}</h1>
    </div>
  )
}
