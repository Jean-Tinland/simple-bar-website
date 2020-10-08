import * as React from 'react'
import { NoVolumeIcon, VolumeHighIcon, VolumeLowIcon, VolumeMutedIcon } from '../../icons'
import message from '../../messages'

import { fakeBar } from '../../../data'

const Sound = ({ lang }) => {
  const { sound } = fakeBar.data
  return (
    <div className="sound">
      <VolumeHighIcon className="sound__icon" />
      {sound}%
      <div className="data__more-info">
        <div className="data__more-info-item">
          {message(lang, 'sound-more-info-low')}
          <div className="sound">
            <VolumeLowIcon className="sound__icon" />
            30%
          </div>
        </div>
        <div className="data__more-info-item">
          {message(lang, 'sound-more-info-no-volume')}
          <div className="sound">
            <NoVolumeIcon className="sound__icon" />
            0%
          </div>
        </div>
        <div className="data__more-info-item">
          {message(lang, 'sound-more-info-muted')}
          <div className="sound">
            <VolumeMutedIcon className="sound__icon" />
            0%
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sound
