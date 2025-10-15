import { ServicesSection } from "../components/services-section"
import { ExpertiseSection } from "../components/expertise-section"
import { ContactSection } from "../components/contact-section"
import { Footer } from "../components/footer"
import {ClientsSection} from "../components/clients-section"
import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ClientsSection />
      <ExpertiseSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
