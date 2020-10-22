import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from './icons'
import message from './messages'

import useInView from '../hooks/use-in-view'

import { images } from '../data'

const Gallery = ({ lang }) => {
  const ref = useRef()

  const [currentImage, setCurrentImage] = useState()
  const [touchStartPosition, setTouchStartPosition] = useState()

  const count = images.length

  const next = () => {
    if (currentImage === count - 1) {
      setCurrentImage(0)
    } else {
      setCurrentImage(currentImage + 1)
    }
  }

  const prev = () => {
    if (currentImage === 0) {
      setCurrentImage(count - 1)
    } else {
      setCurrentImage(currentImage - 1)
    }
  }

  const onTouchStart = (e) => {
    if (!e.targetTouches || !e.targetTouches[0]) return
    const { clientX: startX, clientY: startY } = e.targetTouches[0]
    setTouchStartPosition({ startX, startY })
  }

  const onTouchEnd = (e) => {
    if (!touchStartPosition || !e.changedTouches || !e.changedTouches[0]) {
      setTouchStartPosition(undefined)
      return
    }
    const { startX, startY } = touchStartPosition
    const { clientX: endX, clientY: endY } = e.changedTouches[0]
    const [deltaX, deltaY] = [Math.abs(startX - endX), Math.abs(startY - endY)]
    if (deltaX <= 110 || deltaY >= 60) return
    if (startX < endX && currentImage > 0) prev()
    if (startX > endX && currentImage < count - 1) next()
  }

  useEffect(() => {
    if (currentImage !== undefined) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.removeAttribute('style')
    }
  }, [currentImage])

  useInView(ref, undefined, true, 0.1, true)
  useInView(ref, '.gallery__item', true, 0.5, true)

  return (
    <div ref={ref} className="gallery">
      <div className="gallery__title">{message(lang, 'menu-gallery')}</div>
      <div className="gallery__subtitle" dangerouslySetInnerHTML={{ __html: message(lang, 'gallery-subtitle') }} />
      <div className="gallery__inner">
        {images.map((image, i) => {
          const { title, src } = image
          return (
            <div key={i} className="gallery__item" onClick={() => setCurrentImage(i)}>
              <img
                className="gallery__item-image"
                src={src}
                alt={title[lang]}
                loading="lazy"
                width="1300"
                height="500"
              />
            </div>
          )
        })}
      </div>
      {currentImage !== undefined && (
        <div className="gallery__zoom">
          <div className="gallery__zoom-close" onClick={() => setCurrentImage(undefined)}>
            <CloseIcon className="gallery__zoom-close-icon" />
          </div>
          <div className="gallery__zoom-inner" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <img
              className="gallery__zoom-image"
              src={images[currentImage].src}
              alt={images[currentImage].title[lang]}
            />
            <div className="gallery__zoom-inner-title">{images[currentImage].title[lang]}</div>
          </div>
          <div className="gallery__zoom-controls">
            <ChevronLeftIcon className="gallery__zoom-control gallery__zoom-control--prev" onClick={prev} />
            <ChevronRightIcon className="gallery__zoom-control gallery__zoom-control--next" onClick={next} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
