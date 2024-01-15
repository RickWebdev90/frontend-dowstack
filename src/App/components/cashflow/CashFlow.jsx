import {useState} from 'react'
import MonatsAuswahl from "./MonatsAuswahl.jsx";
import IncomeEntry from "../Income";
import CashFlowBalance from "./CashFlowBalance.jsx";
import ExpenseEntry from "../Expense";
import PopupCreate from "../Popup/PopupCreate";

export default function CashFlow() {
  const [trigger, setTrigger] = useState(false)
  console.log("trig", trigger)
  return (
    <div>
      <div className="cashflow-header">
        <div className="cashflow-title">
          <h1>Dein Cashflow</h1>
        </div>
        <MonatsAuswahl />
        <div></div>
        </div>
        <div className="cashflow-section1">
        <div className="cashflow-income-container">
          <IncomeEntry trigger={trigger}/>
        </div>
        <div className="cashflow-balance-add-container">
        <div className="cashflow-balance">
        <CashFlowBalance trigger={trigger}/>
        </div>
        <div className="cashflow-balance-placeholder">
        <PopupCreate setTrigger={setTrigger} trigger={trigger} />
        </div>
        </div>
        </div>
        <div className="cashflow-section2">
          <div className="cashflow-Expenses">
        <ExpenseEntry trigger={trigger} />
        </div>
        <div className="cashflow-placholder-expenses"></div>
      </div>
    </div>
  );
}
