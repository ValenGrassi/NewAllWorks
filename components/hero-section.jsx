import Link from "next/link"
import { Button } from "../components/ui/button"
import { ArrowRight, Shield, Zap, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Soluciones Tecnológicas Completas para tu Empresa
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Desde instalaciones y cableados hasta desarrollo de software, ofrecemos servicios tecnológicos completos
            que impulsan el crecimiento de tu negocio. 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/#services">
              <Button size="lg" className="text-lg px-8 cursor-pointer">
                Ver servicios
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/#contact">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent cursor-pointer">
              Solicitar Cotización
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Confiable</h3>
              <p className="text-sm text-muted-foreground">+30 años de experiencia</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Expertos</h3>
              <p className="text-sm text-muted-foreground">Profesionales Certificados</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Eficientes</h3>
              <p className="text-sm text-muted-foreground">Respuestas sin demora</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
