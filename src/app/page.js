import Header from './components/header';
import Hero from './components/hero';
import Landing from './components/landing';

import logo from './assets/images/logo.svg';

export default function Home() {
  return (
    <>
      <Header />
      <Hero logo={logo}/>
      <Landing />
    </>
  )
}
