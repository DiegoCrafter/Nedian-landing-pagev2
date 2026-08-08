import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Team from './components/Team.jsx'
import Office from './components/Office.jsx'
import Testimonials from './components/Testimonials.jsx'
import Cta from './components/Cta.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Office />
        <Testimonials />
        <Cta />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
