import Head from 'next/head'
import LangSwitch from '../components/lang-switch'
import Introduction from '../components/introduction'
import message from '../components/messages'

const Home = ({ lang }) => {
  return (
    <div className="homepage">
      <Head>
        <title>{message(lang, 'home-title')}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <LangSwitch lang={lang} />
      <Introduction lang={lang} />
    </div>
  )
}

Home.getInitialProps = (ctx) => {
  const { lang } = ctx.query
  return { lang }
}

export default Home
