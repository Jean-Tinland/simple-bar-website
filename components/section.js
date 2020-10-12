import * as React from 'react'
import classnames from 'classnames'

const Section = ({ id, dark, light, children }) => {
  const classes = classnames(`section section--${id}`, {
    'section--dark': dark,
    'section--light': light
  })
  return (
    <section id={id} className={classes}>
      {children}
    </section>
  )
}

export default Section
