import React from 'react'
import SavinggoalsBalance from './savinggoalsBalance'

export default function Savinggoals() {
  return (
    <div>
      <div className="sparziele-title">
      <h1>Deine Sparziele</h1>
      </div>
      <div className="sparziele-balance">
        <SavinggoalsBalance />
      </div>
    </div>
  )
}
