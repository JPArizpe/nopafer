import Header from './components/header';
import Hero from './components/hero';
import Landing from './components/landing';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nopafer Test Title</title>
      </Head>
      <Header />
      <Hero />
      <Landing />
    </>
  )
}
