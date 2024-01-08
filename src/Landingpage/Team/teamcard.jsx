import React from 'react'
import "./team.css"

export default function Teamcard(props) {
  return (
    <div className='teamcard-container'>
      <div className="teamcard-img">
        <img src={props.image} alt="" />
      </div>
      <div className="teamcard-name">
        <h1>{ props.name}</h1>
      </div>
      <div className="teamcard-text">
        <p>{ props.text }</p>
      </div>
    </div>
  )
}
