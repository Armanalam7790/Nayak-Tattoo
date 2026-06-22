import Footer from './components/Footer'
import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
import About from './sections/About'
import Appointment from './sections/Appointment'
import Contact from './sections/Contact'
import Difference from './sections/Difference'
import FAQ from './sections/FAQ'
import Hero from './sections/Hero'
import Instagram from './sections/Instagram'
import Portfolio from './sections/Portfolio'
// import Process from './sections/Process'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Appointment />
        <Difference />
        {/* <Process /> */}
        <Testimonials />
        <FAQ />
        <Instagram />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
