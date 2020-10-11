import * as React from 'react'
import useClickEffect from '../hooks/use-click-effect'

import '../styles/main.scss'

const MyApp = ({ Component, pageProps }) => {
  useClickEffect()

  return <Component {...pageProps} />
}

export default MyApp
