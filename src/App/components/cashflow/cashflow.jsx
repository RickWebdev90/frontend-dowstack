import React from "react";
import Monatsauswahl from "./monatsauswahl";
import IncomeEntry from "../Income";
import CashflowBalance from "./cashflowBalance";
import ExpenseEntry from "../Expense";

export default function Cashflow() {
  return (
    <div className="cashflow-header">
      <div className="cashflow-title">
        <h1>Dein Cashflow</h1>
      </div>
      <Monatsauswahl />
      <div>
        <IncomeEntry />
      </div>
      <div className="expense-container">
        <ExpenseEntry />
      </div>
      <div className="cashflow-oben">
        <div className="cashflow-income"></div>
        <CashflowBalance />
      </div>
      <div className="cashflow-outcome">
      </div>
    </div>
  );
}
