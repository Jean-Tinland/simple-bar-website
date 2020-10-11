import { useEffect, useState, useCallback } from 'react'

const WIDTH = 26
const DURATION = 320

const useClickEffect = () => {
  const [compatible, setCompatible] = useState(false)

  const start = useCallback(() => window.addEventListener('mousedown', mouseDown), [])
  const cleanUp = useCallback(() => window.removeEventListener('mousedown', mouseDown), [])

  const mouseDown = (e) => {
    const { body } = document
    const { clientX: x, clientY: y } = e
    const cursor = document.createElement('div')
    Object.assign(cursor.style, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: `${WIDTH}px`,
      height: `${WIDTH}px`,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      zIndex: 2147483647,
      opacity: 0,
      transform: `translate(${x - WIDTH / 2}px, ${y - WIDTH / 2}px) scale(0)`,
      pointerEvents: 'none',
      touchAction: 'none',
      transition: `transform ${DURATION} ease`
    })
    body.appendChild(cursor)
    cursor.animate(
      [
        { opacity: 0, transform: `translate(${x - WIDTH / 2}px, ${y - WIDTH / 2}px) scale(0)` },
        { opacity: 1, transform: `translate(${x - WIDTH / 2}px, ${y - WIDTH / 2}px) scale(2)` },
        { opacity: 0, transform: `translate(${x - WIDTH / 2}px, ${y - WIDTH / 2}px) scale(1.6)` }
      ],
      { duration: DURATION }
    )
    setTimeout(() => body.removeChild(cursor), DURATION)
  }

  useEffect(() => setCompatible('animate' in document.createElement('div')), [])

  useEffect(() => {
    if (compatible) {
      start()
      return () => cleanUp()
    }
  }, [compatible, cleanUp, start])
}

export default useClickEffect
