import * as React from 'react'
import classnames from 'classnames'

import { fakeBar } from '../../data'

const Window = ({ index, app }) => {
  const classes = classnames('window', {
    'window--current': index === 0
  })
  return (
    <div className={classes}>
      <div className="window__dots">
        <div className="window__dot" />
        <div className="window__dot" />
        <div className="window__dot" />
      </div>
      <div className="window__title">{app.app}</div>
    </div>
  )
}

const Windows = ({ currentSpace }) => {
  const { process } = fakeBar
  const apps = process.filter((p) => p.space === currentSpace)
  return (
    <div className="windows">
      {apps.map((app, i) => (
        <Window key={i} index={i} app={app} />
      ))}
    </div>
  )
}

export default Windows
