import React from 'react'
import PortfolioBalance from './portfolioBalance'
import AssetsPortfolio from './assetsPortfolio'

export default function Portfolio() {
  return (
    <div>
      <div className="portfolio-title">
      <h1>Dein Portfolio</h1>
      </div>
      <div className="portfolio-header">
        <PortfolioBalance/>
        <AssetsPortfolio/>
        <div>Diagram</div>
      </div>
    </div>
  )
}
