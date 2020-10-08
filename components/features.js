import * as React from 'react'
import message from './messages'

const features = [
  {
    '': '',
    '': ''
  }
]

const Features = ({ lang }) => {
  return (
    <div className="features">
      <div className="features__title">{message(lang, 'menu-features')}</div>
      <div className="features__inner"></div>
    </div>
  )
}

export default Features
