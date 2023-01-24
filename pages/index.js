import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js by Haron!</title>
    <meta http-equiv="Refresh" content="2; url='https://pastes.io'" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Pastes.io!" />
        <p className="description">
          You will redirect soon to Pastes.io<code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
