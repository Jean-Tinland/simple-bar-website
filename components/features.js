import * as React from 'react'
import message from './messages'

const features = [
  { id: 1, image: '/images/features/process.jpg' },
  { id: 2, image: '/images/features/spaces.jpg' },
  { id: 3, image: '/images/features/information.jpg' },
  { id: 4, image: '/images/features/settings.jpg' }
]

const Features = ({ lang }) => {
  return (
    <div className="features">
      <div className="features__title">{message(lang, 'menu-features')}</div>
      <div className="features__subtitle" dangerouslySetInnerHTML={{ __html: message(lang, 'features-subtitle') }} />
      <div className="features__inner">
        {features.map((feature) => {
          const { id, image } = feature
          return (
            <div className="feature" data-id={id}>
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
          )
        })}
      </div>
    </div>
  )
}

export default Features
