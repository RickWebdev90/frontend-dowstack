import React from 'react'
import Monatsauswahl from './monatsauswahl'


export default function Cashflow() {
  return (
    <div className='cashflow-header'>
      <div className="cashflow-title"><h1>Dein Cashflow</h1></div>
      <Monatsauswahl />
      <div></div>
    </div>
  )
}
