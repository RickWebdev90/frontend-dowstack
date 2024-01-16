import {useEffect, useState} from 'react'
import {Bar} from "react-chartjs-2";

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

        const fetchExpensesData = async () => {
            try {
                if (isMongoDBObjectId(userId)) {
                    const response = await fetch(
                        `https://dowstack.onrender.com/out/user/${userId}`
                    );
                    const data = await response.json();
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
    }, [])

    let incomeArray = []
    let expensesArray = []

    if (incomeList.length > 0 || expensesList.length > 0) {
        //income grouping by date

        const incomeResult = incomeList.reduce((groupedAmount, income)=>{
            const month = income.filterDate.month
            if(groupedAmount[month] == null) groupedAmount[month] = 0
            groupedAmount[month] += income.amount
            return groupedAmount
        },{})
        incomeArray = Object.values(incomeResult)


        const expensesResult = expensesList.reduce((groupedAmount, expense)=>{
            const month = expense.filterDate.month
            if(groupedAmount[month] == null) groupedAmount[month] = 0
            groupedAmount[month] += expense.amount
            return groupedAmount
        },{})

        expensesArray = Object.values(expensesResult)


    }
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

                    options={{
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
                            }
                        }
                    }}
                    width={900}
                    height={400}
                />
            </div>
        </div>
    )
};
export default BarChartCashflow; 
