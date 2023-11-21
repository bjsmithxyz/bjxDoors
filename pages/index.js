import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="welcome" />
        <p className="description">
          You see a <code>door</code>.
        </p>
      </main>

      <Footer />
    </div>
  )
}
