import React from 'react'
import PortfolioBalance from './PortfolioBalance.jsx'
import AssetsPortfolio from './AssetsPortfolio.jsx'
import Calculator from './Calculator/Calculator.jsx'
import PortfolioChart from './PortfolioChart'

export default function Portfolio() {
  return (
    <div>
      <div className="portfolio-title">
      <h1>Dein Vermögensrechner</h1>
      </div>
      {/* <div className="portfolio-header">
        <PortfolioBalance/>
        <AssetsPortfolio/>
      <div className='portfolio-chart'>
        <PortfolioChart />
        </div>
      </div> */}
      <div className="calculator-portfolio-container">
        <div></div>
      <div className="calculator">
        <Calculator />
      </div>
      </div>
    </div>
  )
}
