import * as React from 'react'
import { useState } from 'react'
import { WifiIcon, WifiOffIcon } from '../../icons'
import message from '../../messages'

const Wifi = ({ lang, setNotification }) => {
  const [active, setActive] = useState(true)

  const Icon = active ? WifiIcon : WifiOffIcon
  const label = message(lang, active ? 'wifi-active' : 'wifi-inactive')

  const onClick = () => {
    setNotification({
      title: 'simple-bar',
      label: message(lang, active ? 'wifi-disabling' : 'wifi-enabling')
    })
    setActive(!active)
  }

  return (
    <div className="wifi" onClick={onClick}>
      <Icon className="wifi__icon" />
      {label}
    </div>
  )
}

export default Wifi
