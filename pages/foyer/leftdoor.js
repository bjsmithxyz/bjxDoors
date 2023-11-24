import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function foyer() {
  return (
    <div className="container">
      <Head>
        <title>Foyer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="You find yourself in a foyer." />
        <p className="description">
          The door h
        </p>
      </main>

      <Footer />
    </div>
  )
}