import DashBalance from "./DashBalance.jsx";
import "../../../app.css";
import DashGoal from "./DashGoal.jsx";
import DashPortfolio from "./DashPortfolio.jsx";
import BarChartCashflow from "./BarChartCashflow.jsx";
import DognutChartDashboard from "./DognutChartDashboard.jsx";
import ExpenseEntry from "../Expense/ExpenseEntry.jsx";
import DashboardCalculator from "./DashboardCalculator.jsx";
export default function Dashboard() {
  //const auth = sessionStorage.getItem("userid")

  return (
    <div>
      <div className="dashboard-title">
        <h1>Dein Dashboard</h1>
      </div>
      <div className="dashboard-boxes">
        <div className="dashboard-box-balance">
          <DashBalance />
        </div>
        <div className="dashboard-box-goal">
          <DashGoal />
        </div>
        {/* <div className="dashboard-box-portfolio">
        <DashPortfolio />
        </div> */}
      </div>
      <div className="dashboard-charts">
        <div className="dashboard-barchart-container">
          <div className="dashboard-barchart-title">
            <h2>Cashflow Übersicht</h2>
          </div>
          <div className="dashboard-barchart">
            <BarChartCashflow />
          </div>
        </div>
        <div className="dashboard-dognutchart-container">
          <div className="dashboard-dognutchart-title">
            <h2>Ausgaben</h2>
          </div>
          <div className="dashboard-dognut">
            <DognutChartDashboard />
          </div>
        </div>
      </div>
      <div className="dashboard-sektion-container">
        <div className="dashboard-expendes">
          <ExpenseEntry />
        </div>
        <div className="dashboard-calculator">
          <DashboardCalculator />
        </div>
      </div>
      <div></div>
    </div>
  );
}
