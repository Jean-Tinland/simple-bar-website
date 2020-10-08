import * as React from 'react'
import { useState, useEffect } from 'react'
import { ClockIcon } from '../../icons'

const Time = () => {
  const [time, setTime] = useState()
  const [fillerWidth, setFillerWidth] = useState()

  useEffect(() => {
    const now = new Date()

    setTime(now.toLocaleString('en-UK', options))

    const [dayStart, dayEnd] = [new Date(now), new Date(now)]
    dayStart.setHours(0, 0, 0)
    dayEnd.setHours(0, 0, 0)
    dayEnd.setDate(dayEnd.getDate() + 1)
    console.log({ dayEnd, dayStart })
    const range = dayEnd - dayStart
    const diff = Math.max(0, dayEnd - new Date(now))
    setFillerWidth((100 - (100 * diff) / range) / 100)
  }, [])

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  }

  return (
    <div className="time">
      {time && (
        <>
          <ClockIcon className="time__icon" />
          {time}
          <div className="time__filler" style={{ transform: `scaleX(${fillerWidth})` }} />
        </>
      )}
    </div>
  )
}

export default Time
