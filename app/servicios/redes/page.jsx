"use client"

import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Network, Wifi, Cable, Router, CheckCircle, Phone, Zap, MousePointer, Server } from "lucide-react"
import { Header } from "@/components/header"
import Link from "next/link"
import rackMansur from "../../../public/rackMansur.jpeg"
import rack2 from "../../../public/rack2.jpeg"
import rack3 from "../../../public/rack3.jpeg"
import Image from "next/image"
import rack4 from "../../../public/rack4.jpeg"
import { useState } from "react"

export default function NetworkInstallationPage() {
  function RacksToggle({ extraPoints, sectionId }) {
    const [open, setOpen] = useState(false)
  
    return (
      <div>
        <button
          aria-expanded={open}
          aria-controls={`${sectionId}-extras`}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline cursor-pointer"
        >
          {open ? "Ver menos" : "Ver más"}
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6 6 L14 10 L6 14 z" />
          </svg>
        </button>
  
        <div
          id={`${sectionId}-extras`}
          className={`mt-4 text-sm text-muted-foreground overflow-hidden transition-all ${open ? "max-h-96" : "max-h-0"}`}
          style={{ transitionProperty: "max-height, opacity", transitionDuration: "300ms" }}
          aria-hidden={!open}
        >
          <ul className="space-y-2">
            {extraPoints.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-primary mt-1" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  const cards = [
    {
      id: "oficinas",
      title: "Redes para Oficinas",
      img: rackMansur,
      keyPoints: [
        "Redes 5–50 usuarios",
        "Servidor para networking",
        "Access points WiFi",
      ],
      extraPoints: [
        "Equipos de cámaras",
        "Monitor para uso rápido",
        "Etiquetado y documentación",
      ],
      icon: Zap,
    },
    {
      id: "pymes",
      title: "Redes para Pymes",
      img: rack3,
      keyPoints: [
        "Redes 50–100 usuarios",
        "Cobertura WiFi ampliada",
        "Canalizaciones ordenadas",
      ],
      extraPoints: [
        "UPS y estabilización",
        "Patch panels y organizers",
        "Identificación de puertos",
      ],
      icon: Zap,
    },
    {
      id: "multinacionales",
      title: "Redes para Multinacionales",
      img: rack4,
      keyPoints: [
        "Escalable +100 usuarios",
        "Instalación servidores",
        "Capas de seguridad",
      ],
      extraPoints: [
        "Equipos Cisco (firewall/switch/router)",
        "Monitoreo 24/7",
        "Mantenimiento UPS y baterías",
      ],
      icon: Network,
    },
  ]


  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Network className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Instalación de Redes Empresariales
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Construimos una infraestructura de redes robusta y escalable para tu negocio. Desde cableado estructurado a redes inalámbricas, ofrecemos soluciones confiables para que nunca te quedes sin conectividad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"#asesoramiento"}><Button size="lg" className="text-lg px-8 cursor-pointer">
                Recibir Asesoramiento
                <MousePointer className="w-5 h-5 ml-2"/>
              </Button></Link>
              <Link href={"/"}><Button size="lg" variant="outline" className="text-lg px-8 bg-transparent cursor-pointer">
                <Phone className="w-5 h-5 mr-2" />
                Llamar a un experto
              </Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones completas de red: diseño, instalación y mantenimiento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Cable className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Cableado Estructurado</CardTitle>
                <CardDescription>
                  Sistema de cableado profesional para una transmisión de datos confiable
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Cables certificados Cat6/6a de marcas líder</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Sistema de cableado organizado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Etiquetado y documentación</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wifi className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Redes Inalámbricas</CardTitle>
                <CardDescription>WiFi empresarial de alta velocidad con cobertura completa y segura.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Planificación de cobertura WiFi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Diseño estratégico de Access Points</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Red de invitados aislada y segura</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Server className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Racks Informáticos</CardTitle>
                <CardDescription>Montaje y organización profesional de racks para redes limpias, seguras y fáciles de mantener.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Instalación de racks metálicos y murales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Gestión, orden y normalizado de cables</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Patcheras, switches y UPS integrados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Network Types */}
      <section className="py-16 bg-muted/50 border-t-2 border-muted" id="racks">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Nuestros Racks</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Diseñamos y organizamos racks profesionales siguiendo estándares (TIA/EIA). Todo instalado y documentado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <article
              key={card.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-transform hover:-translate-y-2"
              aria-labelledby={`${card.id}-title`}
            >
              {/* Imagen vertical: uso aspect ratio 9:16. Si prefieres 4:5, sustituir aspect-[9/16] por aspect-[4/5] */}
              <div className="w-full bg-muted">
                <div className="aspect-[4/5] sm:aspect-[4/5] overflow-hidden">
                  <Image
                    src={card.img}
                    alt={`${card.title} - All Works`}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                    priority={false}
                  />
                </div>
              </div>

              <div className="p-6">
                <header className="mb-3">
                  <h3 id={`${card.id}-title`} className="text-xl font-semibold text-foreground flex items-center gap-3">
                    <card.icon className="w-5 h-5 text-primary" />
                    {card.title}
                  </h3>

                  {/* badges muy sutiles — resumen rápido */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {card.keyPoints.slice(0, 3).map((kp, i) => (
                      <span key={i} className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                        {kp}
                      </span>
                    ))}
                  </div>
                </header>

                {/* puntos visibles (3 aprox.) */}
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  {card.keyPoints.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary mt-1" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                {/* Toggle: muestra el bloque extra solo cuando se expande */}
                <RacksToggle extraPoints={card.extraPoints} sectionId={card.id} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>


      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nuestro Proceso</h2>
            <p className="text-lg text-muted-foreground">Seguimos un enfoque sistemático para garantizar calidad y continuidad.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Evaluación",
                description: "Analizamos la infraestructura existente y las necesidades específicas",
              },
              {
                step: "02",
                title: "Diseño y Planificación",
                description: "Definimos un plan y elegimos el equipamiento ideal para tu empresa.",
              },
              {
                step: "03",
                title: "Instalación",
                description: "Montaje profesional con mínima interrupción de tus operaciones.",
              },
              {
                step: "04",
                title: "Pruebas y Optimización",
                description: "Validamos el rendimiento y ajustamos cada detalle para máximo desempeño.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50" id="asesoramiento">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">¿Por Qué Elegir Nuestros Servicios?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Ingenieros certificados</h3>
                    <p className="text-muted-foreground text-sm">Profesionales certificados en redes CCNA/CCNP</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Enterprise Equipment</h3>
                    <p className="text-muted-foreground text-sm">Cisco, Ubiquiti, Mikrotik y otras empresas líder</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Diseño Pensado a Futuro</h3>
                    <p className="text-muted-foreground text-sm">
                      Infraestructura escalable que crece con tu negocio
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Soporte Continuo</h3>
                    <p className="text-muted-foreground text-sm">Contratos de mantenimiento y soporte técnico</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg p-8 border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Network Assessment Request</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Company Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-border rounded-md bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">IT Contact</label>
                  <input type="text" className="w-full px-3 py-2 border border-border rounded-md bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Number of Users</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background">
                    <option>1-25 users</option>
                    <option>26-50 users</option>
                    <option>51-100 users</option>
                    <option>100+ users</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Current Network Issues</label>
                  <textarea
                    className="w-full px-3 py-2 border border-border rounded-md bg-background"
                    rows={3}
                  ></textarea>
                </div>
                <Button className="w-full">Schedule Assessment</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
