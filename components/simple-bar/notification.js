import * as React from 'react'
import { useState, useEffect } from 'react'
import classnames from 'classnames'

const Notification = ({ notification, setNotification }) => {
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    if (notification) {
      const animationDelay = setTimeout(() => setClosing(true), 3000 - 160)
      const delay = setTimeout(() => {
        setClosing(false)
        setNotification(undefined)
      }, 3000)
      return () => {
        clearTimeout(delay)
        clearTimeout(animationDelay)
      }
    }
  }, [notification, setNotification])

  const classes = classnames('notification', {
    'notification--closing': closing
  })

  return (
    <>
      {notification && (
        <div className={classes}>
          <div className="notification__title">{notification.title}</div>
          <div className="notification__label">{notification.label}</div>
        </div>
      )}
    </>
  )
}

export default Notification
