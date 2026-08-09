import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Team from './components/Team.jsx'
import Office from './components/Office.jsx'
import Testimonials from './components/Testimonials.jsx'
import Cta from './components/Cta.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Obras from './components/Obras.jsx'
import ObraArticle from './components/ObraArticle.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const obrasMatch = hash.match(/^#\/obras\/(\d{2})$/)
  const isObras = hash.startsWith('#/obras')
  const isArticle = Boolean(obrasMatch)

  useEffect(() => {
    if (hash.startsWith('#/')) window.scrollTo(0, 0)
  }, [hash])

  return (
    <>
      <Navbar />
      {isArticle ? (
        <ObraArticle tag={obrasMatch[1]} />
      ) : isObras ? (
        <Obras />
      ) : (
        <main>
          <Hero />
          <About />
          <Services />
          <Team />
          <Office />
          <Testimonials />
          <Cta />
          <Faq />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  )
}
