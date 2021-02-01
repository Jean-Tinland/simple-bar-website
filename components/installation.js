import * as React from 'react'
import { useRef } from 'react'
import Terminal from './terminal'
import message from './messages'

import useInView from '../hooks/use-in-view'
import FakeWindow from './fake-window'

const Installation = ({ lang }) => {
  const ref = useRef()

  useInView(ref, undefined, true, 0.3, true)

  const command =
    'git clone https://github.com/Jean-Tinland/simple-bar $HOME/Library/Application\\ Support/Übersicht/widgets/simple-bar'

  return (
    <div ref={ref} className="installation">
      <div className="installation__title">{message(lang, 'menu-installation')}</div>
      <div
        className="installation__subtitle"
        dangerouslySetInnerHTML={{ __html: message(lang, 'installation-subtitle') }}
      />
      <div className="installation__inner">
        <div
          className="installation__description"
          dangerouslySetInnerHTML={{ __html: message(lang, 'installation-description-1') }}
        />
        <Terminal command={command} />
        <div
          className="installation__description"
          dangerouslySetInnerHTML={{ __html: message(lang, 'installation-description-2') }}
        />
        <div
          className="installation__description"
          dangerouslySetInnerHTML={{ __html: message(lang, 'installation-description-3') }}
        />
        <div
          className="installation__description"
          dangerouslySetInnerHTML={{ __html: message(lang, 'installation-description-4') }}
        />
        <FakeWindow string={message(lang, 'installation-description-5')} />
      </div>
    </div>
  )
}

export default Installation
