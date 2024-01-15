import React from "react";
import Monatsauswahl from "./monatsauswahl";
import IncomeEntry from "../Income";
import CashflowBalance from "./cashflowBalance";
import ExpenseEntry from "../Expense";
import PopupCreate from "../Popup/PopupCreate";

export default function Cashflow() {
  return (
    <div>
      <div className="cashflow-header">
        <div className="cashflow-title">
          <h1>Dein Cashflow</h1>
        </div>
        <Monatsauswahl />
        <div></div>
        </div>
        <div className="cashflow-section1">
        <div className="cashflow-income-container">
          <IncomeEntry />
        </div>
        <div className="cashflow-balance">
        <CashflowBalance />
        <div className="cashflow-balance-placeholder">
        <PopupCreate />
        </div>
        </div>
        </div>
        <div className="cashflow-section2">
          <div className="cashflow-Expenses">
        <ExpenseEntry />
        </div>
      </div>
    </div>
  );
}
