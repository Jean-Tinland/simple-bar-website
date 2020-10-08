import * as React from 'react'
import { useState, useEffect } from 'react'
import Spaces from './spaces'
import Data from './data/'
import Windows from './windows'
import Notification from './notification'

import { fakeBar } from '../../data'

const SimpleBar = ({ lang }) => {
  const [currentSpace, setCurrentSpace] = useState(1)
  const [notification, setNotification] = useState()
  const [autoPlay, setAutoplay] = useState(true)
  const currentApps = fakeBar.process.filter((p) => p.space === currentSpace)
  const currentApp = currentApps[0]

  const removeHover = () => {
    const elements = document.querySelectorAll('.auto-hover')
    Array.prototype.forEach.call(elements, (el) => el.classList.remove('auto-hover'))
  }

  const click = (selector) => {
    removeHover()
    const target = document.querySelector(selector)
    target && target.click()
  }

  const setHover = (selector) => {
    removeHover()
    const target = document.querySelector(selector)
    target && target.classList.add('auto-hover')
  }

  const demo = () => {
    setTimeout(() => autoPlay && setCurrentSpace(1), 10)
    setTimeout(() => autoPlay && setCurrentSpace(2), 1500)
    setTimeout(() => autoPlay && setCurrentSpace(3), 3000)
    setTimeout(() => autoPlay && setHover('.battery'), 5000)
    setTimeout(() => autoPlay && click('.mic'), 8000)
    setTimeout(() => autoPlay && click('.mic'), 11000)
    setTimeout(() => autoPlay && setHover('.sound'), 14000)
    setTimeout(() => autoPlay && click('.wifi'), 17000)
    setTimeout(() => autoPlay && click('.wifi'), 20000)
    setTimeout(() => autoPlay && setHover('.date-display'), 23000)
    setTimeout(() => autoPlay && setHover('.time'), 26000)
    setTimeout(() => autoPlay && removeHover(), 29000)
    setTimeout(() => autoPlay && demo(), 29000)
  }

  useEffect(() => {
    autoPlay && demo()
    setInterval(() => {
      if (!autoPlay) removeHover()
    }, 3000)
  }, [])

  const onMouseEnter = () => {
    setAutoplay(false)
    removeHover()
  }

  return (
    <div className="simple-bar">
      <div className="simple-bar__inner" onMouseEnter={onMouseEnter}>
        <div className="simple-bar__spaces">
          <Spaces currentSpace={currentSpace} setCurrentSpace={setCurrentSpace} />
        </div>
        <div className="simple-bar__process">{currentApp.app}</div>
        <div className="simple-bar__data">
          <Data lang={lang} setNotification={setNotification} />
        </div>
      </div>
      <div className="simple-bar__bg">
        <img src="/images/simple-bar-bg.jpg" alt="" />
        <Windows currentSpace={currentSpace} />
        <Notification lang={lang} notification={notification} setNotification={setNotification} />
      </div>
    </div>
  )
}

export default SimpleBar
