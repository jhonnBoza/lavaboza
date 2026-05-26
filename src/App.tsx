import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import WhyUsSection from './components/WhyUsSection'
import BrandsSection from './components/BrandsSection'
import ProcessSection from './components/ProcessSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <WhyUsSection />
        <BrandsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
