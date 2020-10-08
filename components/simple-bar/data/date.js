import * as React from 'react'
import { useState, useEffect } from 'react'
import { DateIcon } from '../../icons'
import message from '../../messages'

const DateDisplay = ({ lang }) => {
  const [date, setDate] = useState()
  const [longDate, setLongDate] = useState()

  useEffect(() => {
    const now = new Date()

    const options = {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }

    const longOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    }

    setDate(now.toLocaleDateString('en-UK', options))
    setLongDate(now.toLocaleDateString('en-UK', longOptions))
  }, [])

  return (
    <div className="date-display">
      {date && (
        <>
          <DateIcon className="date-display__icon" />
          {date}
          <div className="data__more-info">
            <div className="data__more-info-item">
              {message(lang, 'date-more-info-long')}
              <div className="date-display">
                <DateIcon className="date-display__icon" />
                {longDate}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default DateDisplay
