import React from 'react'
import Title from './Title'
import Sektion1 from './sektion1'
import Sektion2 from './sektion2'
import Sektion3 from './sektion3'
import Sektion4 from './sektion4'
import Sektion5 from './sektion5'
import TeamSektion from './teamSektion'
import Registration from './Registration/Registration'

export default function Homepage() {
  return (
    <div>
      <Title />
      <Sektion1/>
      <Sektion2/>
      <Sektion3/>
      <Sektion4/>
      <Sektion5/>
      <Registration/>
      <TeamSektion/>
    </div>
  )
}
