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
      <Battery lang={lang} />
      <Mic lang={lang} setNotification={setNotification} />
      <Sound lang={lang} />
      <Wifi lang={lang} setNotification={setNotification} />
      <DateDisplay lang={lang} />
      <Time lang={lang} />
    </div>
  )
}

export default Data
