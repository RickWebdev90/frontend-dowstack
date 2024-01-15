import React from 'react'
import SavingGoalsBalance from './SavingGoalsBalance.jsx'

export default function Savinggoals() {
  return (
    <div>
      <div className="sparziele-title">
      <h1>Deine Sparziele</h1>
      </div>
      <div className="sparziele-balance">
        <SavingGoalsBalance />
      </div>
    </div>
  )
}
