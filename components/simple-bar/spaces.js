import * as React from 'react'
import classnames from 'classnames'
import { fakeBar, appIcons } from '../../data'

const Space = ({ index, currentSpace, setCurrentSpace }) => {
  const { process } = fakeBar
  const onClick = () => setCurrentSpace(index)
  const apps = process.filter((p) => p.space === index)
  const classes = classnames('space', {
    'space--current': index === currentSpace
  })
  return (
    <div className={classes} onClick={onClick}>
      {index}
      {apps.map((app, i) => {
        const Icon = appIcons[app.app]
        return <Icon key={i} />
      })}
    </div>
  )
}

const Spaces = ({ currentSpace, setCurrentSpace }) => {
  const { spaces } = fakeBar
  return (
    <div className="spaces">
      {[...new Array(spaces)].map((_, i) => (
        <Space key={i} index={i + 1} currentSpace={currentSpace} setCurrentSpace={setCurrentSpace} />
      ))}
    </div>
  )
}

export default Spaces
