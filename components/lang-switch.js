import * as React from 'react'
import Link from 'next/link'

const LangSwitch = ({ lang }) => {
  const otherLang = lang === 'en' ? 'fr' : 'en'
  const href = otherLang === 'fr' ? '/fr' : '/en'
  return (
    <Link href={href}>
      <a className="lang-switch">{otherLang}</a>
    </Link>
  )
}

export default LangSwitch
