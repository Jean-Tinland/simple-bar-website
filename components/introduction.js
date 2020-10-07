import * as React from 'react'
import { useState, useEffect } from 'react'
import SimpleBar from './simple-bar/'
import message from './messages'
import { EyeIcon, StarIcon, ForkIcon } from './icons'

import { getRepo } from '../services/github'

const Introduction = ({ lang }) => {
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

  return (
    <div className="introduction">
      <div className="introduction__title">{message(lang, 'introduction-title')}</div>
      <div
        className="introduction__tagline"
        dangerouslySetInnerHTML={{ __html: message(lang, 'introduction-tagline') }}
      />
      <div className="introduction__data">
        <a
          href="https://github.com/Jean-Tinland/simple-bar"
          target="_blank"
          rel="noopener, noreferrer"
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
          rel="noopener, noreferrer"
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
          rel="noopener, noreferrer"
          className="introduction__data-item introduction__data-item--forks"
        >
          <div className="introduction__data-item-left">
            <ForkIcon />
          </div>
          <div className="introduction__data-item-right">{data.forks}</div>
        </a>
      </div>
      <SimpleBar lang={lang} />
    </div>
  )
}

export default Introduction
