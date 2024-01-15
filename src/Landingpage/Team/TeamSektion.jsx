import React from 'react'
import TeamCard from './TeamCard.jsx'
import Rick from "../../app/assets/teambilder/Rick.jpeg"
import Wladimir from "../../app/assets/teambilder/Wladimir.jpeg"
import "./team.css"

export default function TeamSektion() {
  return (
    <div className='teamsektion'>
      <div className="teamtitle">
      <h1>Das Team</h1>
      </div>
      <div className="team-container">
        <TeamCard name="Rick Lochner"
                  image={Rick}
                  text="Erfolgreicher Absolvent der WBS Coding School" />
        <TeamCard name="Wladimir Janowitsch"
                  image={Wladimir}
                  text="Erfolgreicher Absolvent der WBS Coding School"/>
      </div>
    </div>
  )
}
