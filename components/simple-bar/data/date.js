import * as React from 'react'
import { useState, useEffect } from 'react'
import { DateIcon } from '../../icons'

const DateDisplay = () => {
  const [date, setDate] = useState()

  useEffect(() => {
    const now = new Date()

    const options = {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }

    setDate(now.toLocaleDateString('en-UK', options))
  }, [])

  return (
    <div className="date-display">
      {date && (
        <>
          <DateIcon className="date-display__icon" />
          {date}
        </>
      )}
    </div>
  )
}

export default DateDisplay
