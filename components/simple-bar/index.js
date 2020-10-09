import * as React from 'react'
import { useState, useEffect, useCallback, useRef } from 'react'
import Spaces from './spaces'
import Data from './data/'
import Windows from './windows'
import Notification from './notification'
import message from '../messages'
import { PlayIcon, StopIcon } from '../icons'

import { fakeBar } from '../../data'

const SimpleBar = ({ lang }) => {
  const ref = useRef()
  const [currentSpace, setCurrentSpace] = useState(1)
  const [notification, setNotification] = useState()
  const [autoPlay, setAutoplay] = useState(true)
  const [demoStarted, setDemoStarted] = useState(false)
  const [timers, setTimers] = useState([])
  const currentApps = fakeBar.process.filter((p) => p.space === currentSpace)
  const currentApp = currentApps[0]

  const removeHover = () => {
    const elements = ref.current.querySelectorAll('.auto-hover')
    Array.prototype.forEach.call(elements, (el) => el.classList.remove('auto-hover'))
  }

  const click = useCallback((selector) => {
    removeHover()
    const target = ref.current.querySelector(selector)
    target && target.click()
  }, [])

  const hover = useCallback((selector) => {
    removeHover()
    const target = ref.current.querySelector(selector)
    target && target.classList.add('auto-hover')
  }, [])

  const initDemo = useCallback(() => {
    if (timers.length !== 0) return
    setTimers([
      setTimeout(() => setCurrentSpace(1), 10),
      setTimeout(() => setCurrentSpace(2), 1500),
      setTimeout(() => setCurrentSpace(3), 3000),
      setTimeout(() => hover('.battery'), 5000),
      setTimeout(() => click('.mic'), 8000),
      setTimeout(() => click('.mic'), 11000),
      setTimeout(() => hover('.sound'), 14000),
      setTimeout(() => click('.wifi'), 17000),
      setTimeout(() => click('.wifi'), 20000),
      setTimeout(() => hover('.date-display'), 23000),
      setTimeout(() => hover('.time'), 26000),
      setTimeout(() => removeHover(), 29000),
      setTimeout(() => initDemo(), 29000)
    ])
    setAutoplay(true)
    setDemoStarted(true)
  }, [click, hover, timers])

  const cleanupDemo = useCallback(() => {
    if (timers.length === 0) return
    timers.forEach(clearTimeout)
    setTimers([])
    setAutoplay(false)
    setDemoStarted(false)
    setCurrentSpace(1)
    setNotification(undefined)
    removeHover()
  }, [timers])

  useEffect(() => {
    if (autoPlay && !demoStarted) initDemo()
  }, [autoPlay, demoStarted, initDemo])

  useEffect(() => {
    if (!demoStarted) timers.forEach((timer) => timer)
  }, [demoStarted, timers])

  const toggleDemo = () => {
    if (autoPlay) cleanupDemo()
    else initDemo()
  }

  const Icon = autoPlay ? StopIcon : PlayIcon

  return (
    <div ref={ref} className="simple-bar">
      <div className="simple-bar__inner">
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
      <div className="simple-bar__demo-controls">
        <Icon className="simple-bar__demo-icon" onClick={toggleDemo} />
        <div className="simple-bar__demo-tooltip">{message(lang, 'simple-bar-demo-tooltip')}</div>
      </div>
    </div>
  )
}

export default SimpleBar
