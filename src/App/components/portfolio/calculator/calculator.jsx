import React from 'react'
import "../Calculator/calculator.css"

export default function Calculator() {
  return (
    <div>
      <div className="calculator-container">
      <div className="calculator-title">
        <h2>Vermögensrechner (Millionärsrechner)</h2>
      </div>
        <form>
        <div className="calculator-inputs">
        <label>Monatliche Sparrate(€):</label>
        <input type="number" />
        <label>Jährlicher Zins(%):</label>
        <input type="number" />
        <label>Spardauer (Jahre):</label>
        <input type="number" />
        <label>Startkapital(€):</label>
        <input type="number" />
        </div>
        <div className="calculator-button">
        <button>Berechnen</button>  
        </div>
        <div className="calculator-ergebnis">
          <h2>Ergebnis:</h2>
          <h2>Zahl</h2>
        </div>
        </form>
        </div>
    </div>
  )
}
