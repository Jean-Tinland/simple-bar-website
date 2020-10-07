import * as React from 'react'
import Battery from './battery'
import Mic from './mic'
import Sound from './sound'
import Wifi from './wifi'
import DateDisplay from './date'
import Time from './time'

const Data = ({ lang, setNotification }) => {
  return (
    <div className="data">
      <Battery />
      <Mic lang={lang} setNotification={setNotification} />
      <Sound />
      <Wifi lang={lang} setNotification={setNotification} />
      <DateDisplay />
      <Time />
    </div>
  )
}

export default Data
