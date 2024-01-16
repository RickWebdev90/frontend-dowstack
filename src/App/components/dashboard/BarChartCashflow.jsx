import React, {useEffect, useState} from 'react'
import {format} from "date-fns"
import { Chart as ChartJS } from "chart.js/auto"; 
import { Bar } from "react-chartjs-2"; 

function isMongoDBObjectId(id) {
    return (
      typeof id === "string" && id.length === 24 && /^[0-9a-fA-F]+$/.test(id)
    );
  }

function BarChartCashflow() {
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
    console.log("incomlist2", incomeList, expensesList)
    //income destruct
    incomeList.forEach((item=>{
    incomeArray.push(item.amount)
    })); 

    expensesList.forEach((item=>{
    expensesArray.push(item.amount)
    }))

}
    console.log("array",expensesArray)
    return (
        <div>
        <div className="barchart-cashflow">
        <Bar
            data={{
                labels: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Jun.", "Jul.", "Aug.", "Sept.", "Okt.", "Nov.", "Dez."],
                datasets: [
                {
                    label: "Einnahmen",
                    data: incomeArray,
                    backgroundColor: "#6EB636",
                    borderRadius: 40,
                },
                {
                    label: "Ausgaben",
                    data: expensesArray,
                    backgroundColor: "#FF3F49",
                    borderRadius: 40,
                
                }
            ],
        
        }}
        
        options= {{
                    plugins: {
                        legend: {
                            position: "bottom",
                                },
                            },
                    scales: {
                        y: {
                            grid: {
                                drawOnChartArea: false
                                    }
                            },
                        x: {
                                grid: {
                                    drawOnChartArea: false
                                        }   
                            } }
               }}
        width={900}
        height={400}
        />
        </div>
    </div>
)}; 
export default BarChartCashflow; 
