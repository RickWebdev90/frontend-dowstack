import React from 'react'
import Title from './Title'
import Sektion1 from './Sektion1.jsx'
import Sektion2 from './Sektion2.jsx'
import Sektion3 from './Sektion3.jsx'
import Sektion4 from './Sektion4.jsx'
import Sektion5 from './Sektion5.jsx'
import TeamSektion from './Team/TeamSektion.jsx'
import Registration from './Registration/Registration.jsx'

export default function Homepage() {
  return (
    <div>
      <Title />
      <Sektion2/>
      <Registration/>
      <TeamSektion/>
    </div>
  )
}
