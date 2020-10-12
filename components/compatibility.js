import * as React from 'react'
import { useRef } from 'react'
import message from './messages'

import useInView from '../hooks/use-in-view'

const Compatibility = ({ lang }) => {
  const ref = useRef()

  useInView(ref, undefined, true, 0.3, true)
  return (
    <div ref={ref} className="compatibility">
      <div className="compatibility__title">{message(lang, 'menu-compatibility')}</div>
      <div
        className="compatibility__subtitle"
        dangerouslySetInnerHTML={{ __html: message(lang, 'compatibility-subtitle') }}
      />
      <div className="compatibility__inner">
        <div className="compatibility__inner-title">{message(lang, 'compatibility-description-title-1')}</div>
        <div
          className="compatibility__description"
          dangerouslySetInnerHTML={{ __html: message(lang, 'compatibility-description-1') }}
        />
        <div className="compatibility__inner-title">{message(lang, 'compatibility-description-title-2')}</div>
        <div
          className="compatibility__description"
          dangerouslySetInnerHTML={{ __html: message(lang, 'compatibility-description-2') }}
        />
        <div className="compatibility__inner-title">{message(lang, 'compatibility-description-title-3')}</div>
        <div
          className="compatibility__description"
          dangerouslySetInnerHTML={{ __html: message(lang, 'compatibility-description-3') }}
        />
      </div>
    </div>
  )
}

export default Compatibility
