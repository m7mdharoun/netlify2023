import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Takeover Page by Haron!" />
        <p className="description">
          This is a small test <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
