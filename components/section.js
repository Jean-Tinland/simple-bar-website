import * as React from 'react'
import classnames from 'classnames'

const Section = ({ id, dark, children }) => {
  const classes = classnames(`section section--${id}`, {
    'section--dark': dark
  })
  return (
    <section id={id} className={classes}>
      {children}
    </section>
  )
}

export default Section
