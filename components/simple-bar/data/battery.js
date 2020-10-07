import * as React from 'react'
import { ChargingIcon } from '../../icons'

import { fakeBar } from '../../../data'

const Battery = () => {
  const { battery } = fakeBar.data
  return (
    <div className="battery">
      <ChargingIcon className="battery__charging-icon" />
      <div className="battery__icon">
        <div className="battery__icon-filler" style={{ transform: 'scaleX(1)' }} />
      </div>
      {battery}%
    </div>
  )
}

export default Battery
