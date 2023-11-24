import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link' // import Link from Next.js


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Walk away</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="In front of you," />
        <p className="description">
          You see a door into the castle.
          <br></br>
          Do you <Link href="/foyer/foyer">enter</Link>, or <Link href="/walkaway">walk away</Link>?
        </p>
      </main>

      <Footer />
    </div>
  )
}