import React from 'react'
import SavingGoalsBalance from './SavingGoalsBalance.jsx'
import SavingGoalsEntry from "../Goal/index.jsx"

export default function SavingGoals() {
  return (
    <div>
      <div className="SavingGoals-Page">
      <div className="sparziele-title">
      <h1>Deine Sparziele</h1>
      </div>
      <div className="SavingGoals-Balance-Container">
        <SavingGoalsBalance />
      </div>
      <div className='SavingGoals-Container-Page'>
        <SavingGoalsEntry />
      </div>
      </div>
    </div>
  )
}
