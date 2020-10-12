import * as React from 'react'
import { useState, useEffect } from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import LangSwitch from './lang-switch'

import { introductionMenuItems } from '../data'

const Navigation = ({ lang }) => {
  const [visible, setVisible] = useState(false)

  const scrolled = () => setVisible(window.scrollY >= window.innerHeight)

  useEffect(() => {
    window.addEventListener('scroll', scrolled)
    return () => window.removeEventListener('scroll', scrolled)
  }, [])

  const classes = classnames('navigation', {
    'navigation--visible': visible
  })

  return (
    <nav className={classes} role="menu">
      <div className="navigation__inner">
        <Link href={`/${lang}/`}>
          <a className="navigation__brand">simple-bar</a>
        </Link>
        {introductionMenuItems(lang).map((item) => {
          const { code, name } = item
          const anchor = `#${code}`
          const onClick = (e) => {
            e.preventDefault()
            const target = document.querySelector(anchor)
            target && target.scrollIntoView({ behavior: 'smooth' })
          }
          return (
            <a key={code} className="navigation__item" href={anchor} role="menuitem" onClick={onClick}>
              {name}
            </a>
          )
        })}
        <LangSwitch lang={lang} />
      </div>
    </nav>
  )
}

export default Navigation
