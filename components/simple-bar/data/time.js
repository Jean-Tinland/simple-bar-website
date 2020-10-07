import * as React from 'react'
import { useState, useEffect } from 'react'
import { ClockIcon } from '../../icons'

const Time = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => setNow(new Date()), [])

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  }
  const time = now.toLocaleString('en-UK', options)

  const [dayStart, dayEnd] = [now, now]
  dayStart.setHours(0, 0, 0)
  dayEnd.setHours(0, 0, 0)
  dayEnd.setDate(dayEnd.getDate() + 1)
  const range = dayEnd - dayStart
  const diff = Math.max(0, dayEnd - now)
  const fillerWidth = (100 - (100 * diff) / range) / 100

  return (
    <div className="time">
      <ClockIcon className="time__icon" />
      {time}
      <div className="time__filler" style={{ transform: `scaleX(${fillerWidth})` }} />
    </div>
  )
}

export default Time
