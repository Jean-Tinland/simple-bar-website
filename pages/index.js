import * as React from 'react'
import Head from 'next/head'
import Navigation from '../components/navigation'
import Introduction from '../components/introduction'
import Section from '../components/section'
import Features from '../components/features'
import Compatibility from '../components/compatibility'
import Installation from '../components/installation'
import Gallery from '../components/gallery'
import message from '../components/messages'

const Home = ({ lang }) => {
  return (
    <div className="homepage">
      <Head>
        <title>{message(lang, 'home-title')}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Navigation lang={lang} />
      <Introduction lang={lang} />
      <Section id="features" light>
        <Features lang={lang} />
      </Section>
      <Section id="compatibility">
        <Compatibility lang={lang} />
      </Section>
      <Section id="installation" dark>
        <Installation lang={lang} />
      </Section>
      <Section id="gallery">
        <Gallery lang={lang} />
      </Section>
    </div>
  )
}

Home.getInitialProps = (ctx) => {
  const { lang } = ctx.query
  return { lang }
}

export default Home
