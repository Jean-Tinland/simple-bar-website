import * as React from 'react'
import classnames from 'classnames'

const Section = ({ id, dark, noMinHeight, children }) => {
  const classes = classnames(`section section--${id}`, {
    'section--dark': dark,
    'section--no-min-height': noMinHeight
  })
  return (
    <section id={id} className={classes}>
      {children}
    </section>
  )
}

export default Section
