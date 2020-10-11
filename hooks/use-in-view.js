import { useEffect, useState, useCallback } from 'react'

const ratio = (steps) => Array.from({ length: steps + 1 }).map((_, i) => i / steps)

const buildClass = (className) => `${className}--in-view`

const observe = (targets, observer) => {
  Array.prototype.forEach.call(targets, (target) => {
    if (!observer) return
    observer.observe(target)
  })
}

const unobserve = (targets, observer) => {
  Array.prototype.forEach.call(targets, (target) => {
    if (!target || !target.classList[0]) return
    const inViewClass = buildClass(target.classList[0])
    target.classList.remove(inViewClass)
    observer.disconnect()
  })
}

const fallback = (targets) => {
  Array.prototype.forEach.call(targets, (target) => {
    const inViewClass = buildClass(target.classList[0])
    target.classList.add(inViewClass)
  })
}

const useInView = (ref, targetedClass, repeat = true, intersectionValue = 0.2, noMobile) => {
  const [compatible, setCompatible] = useState(false)
  const options = {
    rootMargin: '0px',
    threshold: ratio(100)
  }

  const callback = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        const { intersectionRatio, target } = entry
        if (!target || !target.classList[0] || intersectionRatio === 0) return
        const inViewClass = buildClass(target.classList[0])
        if (intersectionRatio >= intersectionValue) {
          target.classList.add(inViewClass)
        } else {
          if (repeat) target.classList.remove(inViewClass)
        }
      })
    },
    [intersectionValue, repeat]
  )

  useEffect(() => setCompatible(typeof IntersectionObserver !== 'undefined'), [])

  useEffect(() => {
    if (ref.current === undefined) return
    const targets = targetedClass !== undefined ? ref.current.querySelectorAll(targetedClass) : [ref.current]
    Array.prototype.forEach.call(targets, (target) => {
      const inViewClass = buildClass(target.classList[0])
      target.classList.remove(inViewClass)
    })
    if (!compatible || (noMobile && window.innerWidth < 992)) {
      fallback(targets)
    } else {
      const observer = new IntersectionObserver(callback, options)
      observe(targets, observer)
      return () => unobserve(targets, observer)
    }
  }, [compatible, options, ref, repeat, targetedClass, callback, noMobile])
}

export default useInView
