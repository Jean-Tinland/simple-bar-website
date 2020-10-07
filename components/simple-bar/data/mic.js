import * as React from 'react'
import { useState } from 'react'
import { MicOn, MicOff } from '../../icons'
import message from '../../messages'

const Mic = ({ lang, setNotification }) => {
  const [muted, setMuted] = useState(false)

  const Icon = muted ? MicOff : MicOn
  const value = muted ? 0 : 100

  const onClick = () => {
    setNotification({
      title: 'simple-bar',
      label: message(lang, !muted ? 'mic-disabling' : 'mic-enabling')
    })
    setMuted(!muted)
  }

  return (
    <div className="mic" onClick={onClick}>
      <Icon className="mic__icon" />
      {value}%
    </div>
  )
}

export default Mic
