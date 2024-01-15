import React from 'react'

export default function DashboardCalculator() {
    const calcResult = sessionStorage.getItem("calcResult")
    const calcYears = sessionStorage.getItem("calcYears")
    console.log({calcResult})
  return (
    <div>
        <h2>Wunschvermögen</h2>
      <p>Wenn du deine Sparrate 🤑 für deine Investments weiter so aufrecht erhälts, hast du in <span>"{calcYears} Jahren"</span> dein Wunschvermögen von <span>{calcResult}</span> aufgebaut. Weiter so!!! 🙌</p>
    </div>
  )
}
