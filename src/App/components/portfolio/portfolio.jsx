import React from 'react'
import PortfolioBalance from './PortfolioBalance'
import AssetsPortfolio from './AssetsPortfolio'
import Calculator from './Calculator/Calculator'
import PortfolioChart from './PortfolioChart'

export default function Portfolio() {
  return (
    <div>
      <div className="portfolio-title">
      <h1>Dein Portfolio</h1>
      </div>
      <div className="portfolio-header">
        <PortfolioBalance/>
        <AssetsPortfolio/>
        <div className='portfolio-chart'>
        <PortfolioChart />
        </div>
      </div>
      <div className="calculator">
        <Calculator />
      </div>
    </div>
  )
}
