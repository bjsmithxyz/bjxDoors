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
          In front of you, a stone <a href="/foyer/staircase">staircase</a>, leading upwards into darkness.
          <br></br>
          To your left, a large wooden <a href="/foyer/leftdoor">door</a>, to the right, an opening leading <a href="/foyer/rightdoor">down</a>.
        </p>
      </main>

      <Footer />
    </div>
  )
}