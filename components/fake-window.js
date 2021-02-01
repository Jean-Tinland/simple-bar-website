import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { CopyIcon, CheckIcon } from './icons'

const FakeWindow = ({ string }) => {
  const [clicked, setClicked] = useState(false)

  const copyToClipboard = (str) => {
    const cleanedUpString = str.replace(/<br\s*[\/]?>/gi, '\n')
    setClicked(true)
    const el = document.createElement('textarea')
    el.value = cleanedUpString
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    setTimeout(() => setClicked(false), 2000)
  }

  const classes = classnames('fake-window__icon', {
    'fake-window__icon--clicked': clicked
  })

  const Icon = clicked ? CheckIcon : CopyIcon

  const props = {
    className: classes,
    onClick: clicked ? undefined : () => copyToClipboard(string)
  }

  return (
    <div className="fake-window">
      <div className="fake-window__dots">
        <div className="fake-window__dot" />
        <div className="fake-window__dot" />
        <div className="fake-window__dot" />
      </div>
      <Icon {...props} />
      <div className="fake-window__text" dangerouslySetInnerHTML={{ __html: string }} />
    </div>
  )
}

export default FakeWindow
