import * as React from 'react'
import { useState, useEffect } from 'react'
import { DateIcon } from '../../icons'

const DateDisplay = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => setNow(new Date()), [])

  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  }
  const date = now.toLocaleDateString('en-UK', options)
  return (
    <div className="date-display">
      <DateIcon className="date-display__icon" />
      {date}
    </div>
  )
}

export default DateDisplay
