import * as React from 'react'
import message from './messages'

const Features = ({ lang }) => {
  return (
    <div className="features">
      <div className="features__title">{message(lang, 'menu-features')}</div>
      <div className="features__subtitle">{message(lang, 'features-subtitle')}</div>
      <div className="features__inner">
        <div className="feature" data-id="1"></div>
        <div className="feature" data-id="2"></div>
        <div className="feature" data-id="3"></div>
        <div className="feature" data-id="4"></div>
      </div>
    </div>
  )
}

export default Features
