"use client"

import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Building2, Factory, ShoppingBag, GraduationCap, Heart, Briefcase, Rocket, DollarSign, Phone, Film, Popcorn, Clapperboard } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const whatMakesUsSpecial = [
  {
    icon: Rocket,
    title: "Listo para el Futuro" ,
    desc: "Última tecnología del mercado" ,
  },
  {
    icon: DollarSign,
    title: "Sin Sorpresas" ,
    desc: "Precios fijos, tiempos claros" ,
  },
  {
    icon: Phone,
    title: "A Una Llamada" ,
    desc: "Soporte cuando lo necesites",
  },
]

const clients = [
  {
    name: "Cinemark Hoyts",
    industry: "Cines",
    icon: Popcorn,
    services: ["Instalación de redes y eléctricas", "Organización de racks", "Arreglo y cambio de baterías de UPS", "Instalación, configuración y orientación de antenas satelitales"],
    testimonial: "Outstanding service and technical expertise. Our production line monitoring is now seamless.",
    logo: "/cinemark-hoyts-cuadrado.png",
  },
  {
    name: "Cinepolis",
    industry: "Cines",
    icon: Film,
    services: ["Instalación, configuración y orientación de antenas satelitales"],
    testimonial: "Reliable 24/7 connectivity for our critical healthcare operations.",
    logo: "/cinepolis.png",
  },
  {
    name: "Cinecolor",
    industry: "Distribudor de peliculas",
    icon: Clapperboard,
    services: ["Instalación, configuración y orientación de antenas satelitales", "Instalación de sistema de cámaras"],
    testimonial: "Comprehensive security solution across all our retail locations.",
    logo: "/Cinecolor Final.jpg",
  },
  {
    name: "DZE - Espel",
    industry: "Fábrica Automotriz",
    icon: Factory,
    services: ["Instalación y cableado de redes", "Instalación y documentación de rack de servidores", "Instalación de sistema de cámaras"],
    testimonial: "Modern infrastructure supporting our digital transformation initiatives.",
    logo: "/DZE Final.jpg",
  },
  {
    name: "PowerChina",
    industry: "Cines",
    icon: Building2,
    services: ["Redes cableadas y WiFi de alta velocidad"],
    testimonial: "Smart building solutions that enhance tenant experience and operational efficiency.",
    logo: "/PowerChina Final.jpg",
  },
  {
    name: "Fundación Walsh-Facio",
    industry: "Fundación",
    icon: Heart,
    services: ["Desarrollo de página web y sistema full-stack", "Instalación y cableado de redes", "Instalación de sistema de cámaras", "Instalación y servicio técnico de computadoras"],
    testimonial: "Real-time tracking and monitoring capabilities have revolutionized our operations.",
    logo: "/empresas/fundacion.png",
  },
]

export function ClientsSection() {
  return (
    <section id="clientes" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Socios de confianza</span>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
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
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} logo`}
                      width={95}
                      height={95}
                      className="opacity-60 group-hover:opacity-100 transition-opacity"
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
  <div className="flex flex-col md:flex-row md:flex-wrap items-start gap-2 overflow-hidden min-w-0">
    {client.services.map((service, serviceIndex) => (
      <Badge
        key={serviceIndex}
        variant="outline"
        className="text-xs w-fit max-w-full whitespace-normal break-words"
      >
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-px bg-border"></div>
            <Link href="/nosotros#clientes" className="text-sm text-muted-foreground uppercase tracking-wider hover:scale-110 transition-all">ver todos los clientes</Link>
            <div className="w-12 h-px bg-border"></div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-8 lg:p-12 text-white overflow-hidden">
          {/* Futuristic background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>

          <div className="relative z-10 cursor-context-menu">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping delay-75"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping delay-150"></div>
                <span className="text-blue-200">
                  VENTAJAS DE ELEGIRNOS
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                ¿Por Qué Nos Eligen?
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                  Tres protocolos centrales que definen nuestra excelencia operacional
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whatMakesUsSpecial.map((item, index) => {
              const IconComponent = item.icon
              return (<div key={index} className="group relative">
                  {/* Futuristic card with glowing border */}
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                    {/* Animated corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-blue-400/50 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-blue-400/50 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Futuristic icon */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto border border-white/10 group-hover:border-blue-400/50 transition-all duration-300">
                        <IconComponent className="group-hover:scale-110 transition-all duration-300"/>
                        {/* <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <div className="w-3 h-3 bg-white rounded-sm animate-pulse"></div>
                        </div> */}
                      </div>
                      {/* Scanning line effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                    </div>

                    <div className="text-center">
                      <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Status indicator */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full opacity-50 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">¿Querés ver cómo ayudamos a las empresas que nos contratan?</p>
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-px bg-border"></div>
            <Link href="https://www.linkedin.com/company/all-works-ingenieria" target="_blank" className="text-sm text-muted-foreground uppercase tracking-wider hover:scale-110 transition-all">Mirá nuestro linkedin</Link>
            <div className="w-12 h-px bg-border"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
