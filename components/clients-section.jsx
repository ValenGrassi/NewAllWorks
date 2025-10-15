"use client"

import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Building2, Factory, ShoppingBag, GraduationCap, Heart, Briefcase } from "lucide-react"
import Link from "next/link"

const clients = [
  {
    name: "Cinemark Hoyts",
    industry: "Cines",
    icon: Factory,
    services: ["Instalación de redes y eléctricas", "Organización de racks", "Arreglo y cambio de baterías de UPS", "Instalación, configuración y orientación de antenas satelitales"],
    testimonial: "Outstanding service and technical expertise. Our production line monitoring is now seamless.",
    logo: "/cinemark-hoyts-cuadrado.png",
  },
  {
    name: "Cinepolis",
    industry: "Cines",
    icon: Heart,
    services: ["Satellite Communications", "CCTV Network", "Solar Power"],
    testimonial: "Reliable 24/7 connectivity for our critical healthcare operations.",
    logo: "/cinepolis.png",
  },
  {
    name: "Cinecolor",
    industry: "Distribudor de peliculas",
    icon: ShoppingBag,
    services: ["Camera Systems", "Network Installation", "Custom Software"],
    testimonial: "Comprehensive security solution across all our retail locations.",
    logo: "/Cinecolor Final.jpg",
  },
  {
    name: "DZE - Espel",
    industry: "Fábrica Automotriz",
    icon: GraduationCap,
    services: ["Campus Network", "Solar Installation", "Development Services"],
    testimonial: "Modern infrastructure supporting our digital transformation initiatives.",
    logo: "/DZE Final.jpg",
  },
  {
    name: "Rotofrance",
    industry: "Logistics",
    icon: Briefcase,
    services: ["Satellite Tracking", "Security Systems", "Server Infrastructure"],
    testimonial: "Real-time tracking and monitoring capabilities have revolutionized our operations.",
    logo: "/Rotofrance Final.jpg",
  },
  {
    name: "PowerChina",
    industry: "Cines",
    icon: Building2,
    services: ["Building Automation", "Security Cameras", "Network Systems"],
    testimonial: "Smart building solutions that enhance tenant experience and operational efficiency.",
    logo: "/PowerChina Final.jpg",
  },
]

export function ClientsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Trusted Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Clientes Que Confían en Nuestros Expertos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          Desde pequeños negocios hasta empresas multinacionales, brindamos soluciones tecnológicas que impulsan el éxito y la innovación en todas las provincias del país.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "1000+", label: "Proyectos Completados" },
            { number: "30+", label: "Clientes Activos" },
            { number: "10+", label: "Técnicos Expertos" },
            { number: "Top 5", label: "en Innovación Tecnológica" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => {
            const IconComponent = client.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  {/* Client Logo */}
                  <div className="flex items-center justify-between mb-6">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} logo`}
                      className="h-24 opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="mb-6 cursor-context-menu">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{client.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {client.industry}
                    </Badge>
                  </div>

                  {/* Services */}
                  <div className="mb-6 cursor-context-menu">
                    <div className="flex flex-wrap gap-2">
                      {client.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">¿Estás preparado para dar el siguiente paso con tu empresa?</p>
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-px bg-border"></div>
            <Link href="/#contacto" className="text-sm text-muted-foreground uppercase tracking-wider hover:scale-110 transition-all">Empezá hoy</Link>
            <div className="w-12 h-px bg-border"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
