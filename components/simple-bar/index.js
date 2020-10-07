import * as React from 'react'
import { useState } from 'react'
import Spaces from './spaces'
import Data from './data/'
import Windows from './windows'
import Notification from './notification'

import { fakeBar } from '../../data'

const SimpleBar = ({ lang }) => {
  const [currentSpace, setCurrentSpace] = useState(1)
  const [notification, setNotification] = useState()
  const currentApps = fakeBar.process.filter((p) => p.space === currentSpace)
  const currentApp = currentApps[0]

  return (
    <div className="simple-bar">
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
    </div>
  )
}

export default SimpleBar
