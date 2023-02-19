import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js by Haron!</title>
    

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to simple page by Haron!" />
        <p className="description">
          Note : This App error will be fixed soon<code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
