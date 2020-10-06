import * as React from 'react'
import message from './messages'

const Introduction = ({ lang }) => {
  return (
    <div className="introduction">
      <div className="introduction__title">{message(lang, 'introduction-title')}</div>
      <div
        className="introduction__tagline"
        dangerouslySetInnerHTML={{ __html: message(lang, 'introduction-tagline') }}
      />
    </div>
  )
}

export default Introduction
