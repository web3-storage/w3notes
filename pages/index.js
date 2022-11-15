import Head from 'next/head'
import ConceptList from '../components/ConceptList'

export default function Home() {
  return (
    <>
      <Head>
        <title>w3notes</title>
        <meta name="description" content="Notes from the permaweb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ConceptList />
      </main>
    </>
  )
}
