import * as React from 'react'
import message from './messages'

const Features = ({ lang }) => {
  return (
    <div className="features">
      <div className="features__title">{message(lang, 'menu-features')}</div>
      <div className="features__subtitle" dangerouslySetInnerHTML={{ __html: message(lang, 'features-subtitle') }} />
      <div className="features__inner">
        <div className="feature" data-id="1">
          <div className="feature__left">
            <div className="feature__title">{message(lang, 'feature-1-title')}</div>
            <div
              className="feature__description"
              dangerouslySetInnerHTML={{ __html: message(lang, 'feature-1-description') }}
            />
          </div>
          <div className="feature__right">
            <img src="/images/features/process.jpg" alt="" />
          </div>
        </div>
        <div className="feature" data-id="2">
          <div className="feature__left">
            <div className="feature__title">Spaces display</div>
            <div className="feature__description">Description 2</div>
          </div>
          <div className="feature__right"></div>
        </div>
        <div className="feature" data-id="3">
          <div className="feature__left">
            <div className="feature__title">Global information</div>
            <div className="feature__description">Description 3</div>
          </div>
          <div className="feature__right"></div>
        </div>
        <div className="feature" data-id="4">
          <div className="feature__left">
            <div className="feature__title">Settings module</div>
            <div className="feature__description">Description 4</div>
          </div>
          <div className="feature__right"></div>
        </div>
      </div>
    </div>
  )
}

export default Features
