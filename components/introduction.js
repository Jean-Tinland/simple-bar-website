import * as React from 'react'
import SimpleBar from './simple-bar/'
import message from './messages'

const Introduction = ({ lang }) => {
  return (
    <div className="introduction">
      <div className="introduction__title">{message(lang, 'introduction-title')}</div>
      <div
        className="introduction__tagline"
        dangerouslySetInnerHTML={{ __html: message(lang, 'introduction-tagline') }}
      />
      <SimpleBar lang={lang} />
    </div>
  )
}

export default Introduction
