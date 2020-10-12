import * as React from 'react'
import { useRef } from 'react'
import message from './messages'

import useInView from '../hooks/use-in-view'

const Compatibility = ({ lang }) => {
  const ref = useRef()

  useInView(ref, '.feature', true, 0.5, true)
  return (
    <div ref={ref} className="compatibility">
      <div className="compatibility__title">{message(lang, 'menu-compatibility')}</div>
      <div
        className="compatibility__subtitle"
        dangerouslySetInnerHTML={{ __html: message(lang, 'compatibility-subtitle') }}
      />
      <div className="compatibility__inner"></div>
    </div>
  )
}

export default Compatibility
