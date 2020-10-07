import * as React from 'react'
import { useState, useEffect } from 'react'
import classnames from 'classnames'

const notification = ({ notification, setNotification }) => {
  const [closing, setClosing] = useState(false)
  const [delay, setDelay] = useState()
  const [animationDelay, setAnimationDelay] = useState()

  useEffect(() => {
    clearTimeout(delay)
    setDelay(setTimeout(() => setNotification(undefined), 4000))
    setAnimationDelay(setTimeout(() => setClosing(true), 4000 - 160))
    return () => {
      clearTimeout(animationDelay)
      clearTimeout(delay)
      setClosing(false)
    }
  }, [notification])

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

export default notification
