import * as React from 'react'
import { useState, useEffect } from 'react'
import { ClockIcon } from '../../icons'
import message from '../../messages'

const Time = ({ lang }) => {
  const [time, setTime] = useState()
  const [time12h, setTime12h] = useState()
  const [fillerWidth, setFillerWidth] = useState()

  useEffect(() => {
    const now = new Date()

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    }

    const options12h = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }

    setTime(now.toLocaleString('en-UK', options))
    setTime12h(now.toLocaleString('en-UK', options12h))

    const [dayStart, dayEnd] = [new Date(now), new Date(now)]
    dayStart.setHours(0, 0, 0)
    dayEnd.setHours(0, 0, 0)
    dayEnd.setDate(dayEnd.getDate() + 1)
    console.log({ dayEnd, dayStart })
    const range = dayEnd - dayStart
    const diff = Math.max(0, dayEnd - new Date(now))
    setFillerWidth((100 - (100 * diff) / range) / 100)
  }, [])

  return (
    <div className="time">
      {time && (
        <>
          <ClockIcon className="time__icon" />
          {time}
          <div className="time__filler" style={{ transform: `scaleX(${fillerWidth})` }} />
          <div className="data__more-info">
            <div className="data__more-info-item">
              {message(lang, 'time-more-info-12h')}
              <div className="time">
                <ClockIcon className="time__icon" />
                {time12h}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Time
