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

export default function NetworkInstallationPage() {
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
                    <span className="text-sm">WiFi 6/6E technology</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Mesh network design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Guest network isolation</span>
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
      <section className="py-16 bg-muted/50" id="racks">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nuestros Racks</h2>
            <p className="text-lg text-muted-foreground">Diseñamos y organizamos racks profesionales siguiendo estándares internacionales (TIA/EIA).</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
          <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  Redes para Oficinas
                </CardTitle>
              </CardHeader>
              <div className="m-2 rounded-2xl"><Image src={rackMansur} className="rounded-sm"/></div>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Redes de 5-50 usuarios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Servidor para networking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Access points WiFi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Equipos de cámaras</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Monitor para uso veloz</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  Redes para Pymes
                </CardTitle>
              </CardHeader>
              <div className="m-2 rounded-2xl"><Image src={rack2} className="rounded-sm"/></div>
              <CardContent>
              <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Redes de 50-100 usuarios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Servidor para networking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Cobertura WiFi ampliada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Equipos de cámaras</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Identificación y etiquetado de puertos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Canalizaciones ordenadas (bandejas, patcheras, organizers)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>UPS estabilizador de tensión</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="w-6 h-6 text-primary" />
                  Redes para Multinacionales
                </CardTitle>
              </CardHeader>
              <div className="m-2 rounded-2xl"><Image src={rack3} className="rounded-sm"/></div>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Redes de +100 usuarios escalable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Instalación y mantenimiento servidores HP ProLiant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Capas de seguridad avanzadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Equipación última generación <b>Cisco</b> (firewall, router, switch)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Identificación y etiquetado de puertos.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Canalizaciones ordenadas (bandejas, patcheras, organizers)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Instalación de UPS y cambios de baterías</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Sistema monitoreo 24/7 con app <a href="/servicios/desarrollo" className="underline cursor-pointer text-blue-500">acá</a></span>
                  </li>
                </ul>
              </CardContent>
            </Card>
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
              <h2 className="text-3xl font-bold text-foreground mb-6">¿Por qué elegir nuestros servicios de redes?</h2>
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
