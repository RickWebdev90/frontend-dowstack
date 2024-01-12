import React from 'react'
import Monatsauswahl from './monatsauswahl'
import CashflowBalance from './cashflowBalance'


export default function Cashflow() {
  return (
    <div>
    <div className='cashflow-header'>
      <div className="cashflow-title"><h1>Dein Cashflow</h1></div>
      <Monatsauswahl />
      <div></div>
    </div>
      <div className="cashflow-oben">
        <div className="cashflow-income"></div>
      <CashflowBalance />
    </div>
      <div className="cashflow-outcome">
        <div>Hier ausgaben</div>
      </div>
    </div>
  )
}
