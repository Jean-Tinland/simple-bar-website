import * as React from 'react'
import { useRef } from 'react'
import message from './messages'

import useInView from '../hooks/use-in-view'

const features = [
  { id: 1, image: '/images/features/process.jpg' },
  { id: 2, image: '/images/features/spaces.jpg' },
  { id: 3, image: '/images/features/information.jpg' },
  { id: 4, image: '/images/features/settings.jpg' }
]

const Features = ({ lang }) => {
  const ref = useRef()

  useInView(ref, '.feature', true, 0.5, true)

  return (
    <div ref={ref} className="features">
      <div className="features__title">{message(lang, 'menu-features')}</div>
      <div className="features__subtitle" dangerouslySetInnerHTML={{ __html: message(lang, 'features-subtitle') }} />
      <div className="features__inner">
        {features.map((feature) => {
          const { id, image } = feature
          return (
            <div key={id} className="feature">
              <div className="feature__inner" data-id={id}>
                <div className="feature__left">
                  <div className="feature__title">{message(lang, `feature-${id}-title`)}</div>
                  <div
                    className="feature__description"
                    dangerouslySetInnerHTML={{ __html: message(lang, `feature-${id}-description`) }}
                  />
                </div>
                <div className="feature__right">
                  <img src={image} alt="" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Features
