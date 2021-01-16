/* eslint-disable react/jsx-no-target-blank */
import * as React from 'react'
import { useState, useEffect, useRef, memo } from 'react'
import SimpleBar from './simple-bar/'
import message from './messages'
import { EyeIcon, StarIcon, ForkIcon } from './icons'

import { getRepo } from '../services/github'

import useInView from '../hooks/use-in-view'

import { introductionMenuItems } from '../data'

const Introduction = ({ lang }) => {
  const ref = useRef()
  const [data, setData] = useState({
    watchers: 0,
    stars: 0,
    forks: 0
  })

  useEffect(() => {
    const getData = async () => {
      const res = await getRepo()
      setData({
        watchers: res.subscribers_count,
        stars: res.stargazers_count,
        forks: res.forks
      })
    }
    getData()
  }, [])

  useInView(ref, undefined, true, 0.3, true)

  return (
    <div ref={ref} className="introduction">
      <div className="introduction__title">{message(lang, 'introduction-title')}</div>
      <div
        className="introduction__tagline"
        dangerouslySetInnerHTML={{ __html: message(lang, 'introduction-tagline') }}
      />
      <div className="introduction__data">
        <a
          href="https://github.com/Jean-Tinland/simple-bar"
          target="_blank"
          className="introduction__data-item introduction__data-item--watchers"
        >
          <div className="introduction__data-item-left">
            <EyeIcon />
          </div>
          <div className="introduction__data-item-right">{data.watchers}</div>
        </a>
        <a
          href="https://github.com/Jean-Tinland/simple-bar"
          target="_blank"
          className="introduction__data-item introduction__data-item--stars"
        >
          <div className="introduction__data-item-left">
            <StarIcon />
          </div>
          <div className="introduction__data-item-right">{data.stars}</div>
        </a>
        <a
          href="https://github.com/Jean-Tinland/simple-bar"
          target="_blank"
          className="introduction__data-item introduction__data-item--forks"
        >
          <div className="introduction__data-item-left">
            <ForkIcon />
          </div>
          <div className="introduction__data-item-right">{data.forks}</div>
        </a>
      </div>
      <SimpleBar lang={lang} />
      <nav className="introduction__menu" role="menu">
        {introductionMenuItems(lang).map((item) => {
          const { code, name } = item
          const anchor = `#${code}`
          const onClick = (e) => {
            e.preventDefault()
            const target = document.querySelector(anchor)
            target && target.scrollIntoView({ behavior: 'smooth' })
          }
          return (
            <a key={code} className="introduction__menu-item" href={anchor} role="menuitem" onClick={onClick}>
              {name}
            </a>
          )
        })}
      </nav>
    </div>
  )
}

export default memo(Introduction)
