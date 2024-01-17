import React, {useEffect, useState} from 'react'
import { Chart as ChartJS } from "chart.js/auto"; 
import { Doughnut } from "react-chartjs-2"; 
import {format} from "date-fns"

function isMongoDBObjectId(id) {
    return (
      typeof id === "string" && id.length === 24 && /^[0-9a-fA-F]+$/.test(id)
    );
  }

function DognutChartDashboard() {
    const userId = sessionStorage.getItem("userid");
    const [incomeList, setIncomeList] = useState([]);
    const [expensesList, setExpensesList] = useState([])
    
useEffect(() => {
    const fetchIncomeData = async () => {
        try {
            if (isMongoDBObjectId(userId)) {
              const response = await fetch(
                `https://dowstack.onrender.com/in/user/${userId}`
              );
              const data = await response.json();
              // console.log("data income", data)
              // console.log("INCOME DATA 💲", data);
              data.msg ? setIncomeList([]) : setIncomeList(data);
              
            }
          } catch (err) {
            console.error("ERROR while fetching Data:", err.message);
          }
    };

    const fetchExpensesData =  async () => {
        try {
            if (isMongoDBObjectId(userId)) {
              const response = await fetch(
                `https://dowstack.onrender.com/out/user/${userId}`
              );
              const data = await response.json();
              console.log(data)
              // console.log("data income", data)
              // console.log("INCOME DATA 💲", data);
              data.msg ? setExpensesList([]) : setExpensesList(data);
              
            }
          } catch (err) {
            console.error("ERROR while fetching Data:", err.message);
          }
    };
    fetchIncomeData();
    fetchExpensesData(); 
},[])

const incomeArray = []
const expensesArray = []

if(incomeList.length>0 || expensesList.length>0){
    console.log("incomlist2 dognut", incomeList, expensesList)
    //income destruct
    incomeList.forEach((item=>{
    incomeArray.push(item.amount)
    })); 

    expensesList.forEach((item=>{
    expensesArray.push(item.amount)
    }))

}
    console.log("array dognut",expensesArray)
  return (
    <div>
    <Doughnut 
        data={{
            labels: ["Fixkosten", "variable Kosten"],
            datasets: [
                {
                    data: [875, 650],
                    backgroundColor: ["#6EB636", "#267BC6"],
                    borderColor: ["#6EB636", "#267BC6"],
                },

            ]
        }}
        options= {{
            plugins: {
                legend: {
                    position: "bottom",
                        },
                    },
       }}
    width={400}
    height={400}
    />
      
    </div>
  )
}
export default DognutChartDashboard;