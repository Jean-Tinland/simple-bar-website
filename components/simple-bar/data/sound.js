import * as React from 'react'
import { VolumeHighIcon } from '../../icons'

import { fakeBar } from '../../../data'

const Sound = () => {
  const { sound } = fakeBar.data
  return (
    <div className="sound">
      <VolumeHighIcon className="sound__icon" />
      {sound}%
    </div>
  )
}

export default Sound
