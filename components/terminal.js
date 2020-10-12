import * as React from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { CopyIcon, CheckIcon } from './icons'

const highlightCommand = (command) => {
  const [first, second] = command.split(' ')
  const rest = command.replace(`${first} ${second} `, '')
  return `<span>${first}</span> <span>${second}</span> ${rest}`
}

const Terminal = ({ command }) => {
  const [clicked, setClicked] = useState(false)

  const copyToClipboard = (str) => {
    setClicked(true)
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    setTimeout(() => setClicked(false), 2000)
  }

  const classes = classnames('terminal__icon', {
    'terminal__icon--clicked': clicked
  })

  const Icon = clicked ? CheckIcon : CopyIcon

  const props = {
    className: classes,
    onClick: clicked ? undefined : () => copyToClipboard(command)
  }

  return (
    <div className="terminal">
      <div className="terminal__dots">
        <div className="terminal__dot" />
        <div className="terminal__dot" />
        <div className="terminal__dot" />
      </div>
      <Icon {...props} />
      <div className="terminal__command">
        <b>$</b> <span dangerouslySetInnerHTML={{ __html: highlightCommand(command) }} />
        <sub className="terminal__cursor" />
      </div>
    </div>
  )
}

export default Terminal
