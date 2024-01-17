import React from 'react'
import background from "../app/assets/Landingpage/Titelbild/background_title.jpeg"
import titelLogo from "../app/assets/logo/DowStack_Logo_Color_White.svg"

export default function Title() {
  return (
    <div className='title-container'
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        }}>
      <div className="title-subcontainer">
        <div className="title-logo">
          <img src={titelLogo} alt="" />
        </div>
        <div>
        <h1>In Zeiten mit steigenden Kosten, ist man gut beraten, wenn man einen guten Überblick über seine Finanzen hat. <br />
        <br />
        Mit Dowstack erlangst du die Kontrolle über deine Finanzen endlich wieder zurück. </h1>
        </div>
      </div>
    </div>
  )
}
