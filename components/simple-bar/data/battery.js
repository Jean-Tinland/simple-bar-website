import * as React from 'react'
import { ChargingIcon } from '../../icons'
import message from '../../messages'

import { fakeBar } from '../../../data'

const Battery = ({ lang }) => {
  const { battery } = fakeBar.data
  return (
    <div className="battery">
      <div className="battery__icon">
        <div className="battery__charging-icon">
          <ChargingIcon className="battery__charging-icon-outline-left" />
          <ChargingIcon className="battery__charging-icon-fill" />
          <ChargingIcon className="battery__charging-icon-outline-right" />
        </div>
        <div className="battery__icon-filler" style={{ transform: 'scaleX(1)' }} />
      </div>
      {battery}%
      <div className="data__more-info">
        <div className="data__more-info-item">
          {message(lang, 'battery-more-info-not-charging')}
          <div className="battery">
            <div className="battery__icon">
              <div className="battery__icon-filler" style={{ transform: 'scaleX(0.8)' }} />
            </div>
            80%
          </div>
        </div>
        <div className="data__more-info-item">
          {message(lang, 'battery-more-info-low')}
          <div className="battery battery--low">
            <div className="battery__icon">
              <div className="battery__icon-filler" style={{ transform: 'scaleX(0.15)' }} />
            </div>
            15%
          </div>
        </div>
      </div>
    </div>
  )
}

export default Battery
