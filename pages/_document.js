import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import message from '../components/messages'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const { lang } = this.props.__NEXT_DATA__.props.pageProps
    return (
      <Html lang={lang}>
        <Head>
          <meta name="description" content={message(lang, 'seo-description')} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
