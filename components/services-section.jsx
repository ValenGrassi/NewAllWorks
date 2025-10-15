import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Camera, Satellite, Network, Server, Sun, Code, Globe, Database, Cctv, SatelliteDish } from "lucide-react"

const hardwareServices = [
  {
    link: "servicios/camaras",
    icon: Cctv,
    title: "Instalación de cámaras de seguridad",
    description: "Sistemas CCTV profesionales con monitoreo remoto para cobertura completa de seguridad.",
  },
  {
    link: "servicios/sat",
    icon: SatelliteDish,
    title: "Instalación y orientación de antenas satelitales",
    description: "Sistemas de comunicación satelital de alto rendimiento para conectividad confiable en cualquier lugar.",
  },
  {
    link: "servicios/redes",
    icon: Network,
    title: "Infraestructura de Redes",
    description: "Diseño, instalación y optimización de redes para conectividad sin interrupciones en tu empresa.",
  },
  {
    link: "servicios/redes#racks",
    icon: Server,
    title: "Instalación de Racks de Servidores",
    description: "Instalación profesional de racks con gestión de energía, refrigeración y organización adecuada.",
  },
  {
    link: "servicios/paneles",
    icon: Sun,
    title: "Sistemas de Paneles Solares",
    description: "Sustainable energy solutions with professional installation and monitoring systems.",
  },
]

const softwareServices = [
  {
    link: "servicios/desarrollo",
    icon: Globe,
    title: "Desarrollo Web",
    description: "Sitios web y aplicaciones web a medida, construidos con tecnologías modernas y buenas prácticas.",
  },
  {
    link: "servicios/desarrollo",
    icon: Code,
    title: "Sistemas Full-Stack",
    description: "Soluciones de software completas, desde interfaces frontend hasta infraestructura backend.",
  },
  {
    link: "servicios/desarrollo",
    icon: Database,
    title: "Bases de datos",
    description: "Diseño, implementación y optimización de bases de datos escalables para tus necesidades",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Integramos tecnología que conecta, protege y optimiza tu negocio, desde la base de la infraestructura hasta el desarrollo de sistemas personalizados
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hardware Services */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Soluciones Físicas</h3>
            <div className="space-y-6">
              {hardwareServices.map((service, index, link) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow cursor-pointer">
                  <Link href={`/${service.link}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>

          {/* Software Services */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Soluciones Digitales</h3>
            <div className="space-y-6">
              {softwareServices.map((service, index, link) => (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow cursor-pointer">
                    <Link href={`/${service.link}`}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <service.icon className="w-5 h-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </CardContent>
                  </Link>
                  </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
