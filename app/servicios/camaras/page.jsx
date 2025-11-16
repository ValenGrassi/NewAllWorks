import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Cctv, Wifi, Cable, UserRoundCog, LucideMousePointer } from "lucide-react"
import Image from "next/image"
import Panel from "../../../public/camaraPanel.webp"
import Link from "next/link"

export default function CameraInstallationPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Cctv className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Instalación Profesional de Cámaras de Seguridad
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Protegé tu empresa con sistemas de videovigilancia de última generación. 
            Desde cámaras WIFI hasta redes completas de CCTV, ofrecemos soluciones a medida para tu seguridad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#presupuesto">
                <Button size="lg" className="text-lg px-8 cursor-pointer">
                Solicitá tu Cotización
                <LucideMousePointer className="w-5 h-5 ml-2"/>
                </Button>
              </a>
              <Link href="tel:+541124611212">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent cursor-pointer">
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar a un Experto
                </Button>
              </Link>
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
            Más de 40 años ofreciendo instalaciones y mantenimiento a empresas de diferentes escalas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Wifi className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Cámaras inteligentes (IP y WiFi)</CardTitle>
                <CardDescription>Monitoreo remoto en <b>alta definición 4k</b> sin tener que cablear.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Última tecnología del mercado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Sin necesidad de equipo de grabación</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Acceso desde app móvil</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Servicio de guardado en la nube</span>
                  </li>
                  
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Cable className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Redes CCTV Cableadas</CardTitle>
                <CardDescription>Solucion robusta, confiable y escalable para empresas.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Coordinación multi-cámara</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Estación de monitoreo central</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Grabación física más segura y privada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Menor susceptibilidad a interferencias</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <UserRoundCog className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Mantenimiento Continuo</CardTitle>
                <CardDescription>Asistencia para garantizar tu seguridad con el paso del tiempo.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Limpieza, ajustes y reorientación</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Solución de fallas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Revisión de cableado y fuentes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Verificación del sistema de grabación</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nuestro Proceso</h2>
            <p className="text-lg text-muted-foreground">Instalación experta en 4 simples pasos</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Relevamiento en el lugar",
                description: "Análisis del lugar y planificación de la ubicación de las cámaras",
              },
              {
                step: "02",
                title: "Diseño del Sistema",
                description: "Presupuesto personalizado según las necesidades de tu negocio",
              },
              {
                step: "03",
                title: "Instalación Profesional",
                description: "Colocación experta con mínima interrupción a tus operaciones",
              },
              {
                step: "04",
                title: "Soporte y Mantenimiento",
                description: "Instalamos la app y damos mantenimiento para que tu sistema nunca falle",
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

      {/* Process Section */}
      {/* <section className="py-16 bg-muted/50 border-t-2 border-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Producto Destacado</h2>
          </div>

          <div className="grid gap-8 max-w-6xl mx-auto">
            <div className="group">
              <div className="bg-muted rounded-2xl mb-4 overflow-hidden">
                <Image
                  src={Panel}
                  alt="Dome Camera"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-semibold text-red-500 mb-1">Nuevo</span>
              <h3 className="text-lg font-semibold text-foreground mb-1"> Imou AOV PT 5MPX - ¡Cámara que no necesita que le lleves tensión!</h3>
              <p className="text-sm text-muted-foreground mb-1">Grabación continua 24/7 (AOV) | Duración ilimitada de la batería | Conexión 4G o wifi | Detección de personas I.A. | Imagen 3K UHD </p>
              <p className="text-sm underline">Ver detalles {">"}</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-16 border-y-2 border-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Producto Destacado</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="md:flex md:items-stretch">
                {/* IMAGEN — más alta */}
                <div className="md:w-1/2">
                  <div className="h-72 md:h-[480px] relative bg-muted overflow-hidden">
                    <Link target="_blank" href="https://www.imou.com/la/product/detail/aov-pt-5mp">
                      <Image
                        src={Panel}
                        alt="Starlink Enterprise - terminal satelital empresarial"
                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                        priority={false}
                      />
                    </Link>
                  </div>
                </div>

                {/* CONTENIDO — card más alto */}
                <div className="p-8 md:w-1/2 flex flex-col justify-between min-h-[480px]">
                  <div>
                    <span className="inline-block text-xs font-semibold text-red-600 mb-3 underline underline-offset-3">Nuevo</span>

                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      Cámara Wifi Imou 5mpx
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                    Durabilidad, conectividad, detección. AOV lo hace todo.
                    </p>

                    <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1" />
                        <span className="font-medium text-foreground">¡No necesita que le lleves tensión!</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1" />
                        <span>Grabación 24/7 · Detección por IA · Imagen 3K UHD</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1" />
                        <span>Instalación y soporte profesional</span>
                      </li>
                    </ul>
                  </div>

                  {/* CTA alineado a la derecha */}
                  <div className="flex items-center justify-start mt-4">
                    <Link
                      href="https://www.imou.com/la/product/detail/aov-pt-5mp"
                      target="_blank"
                      className="inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
                      aria-label="Ver detalles Starlink Enterprise"
                    >
                      <span className="text-sm font-medium text-primary group-hover:underline transition duration-200">Ver detalles</span>
                      <span
                        className="inline-block ml-2 transition-transform duration-200 transform group-hover:translate-x-2"
                        aria-hidden="true"
                      >
                        &gt;
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16" id="presupuesto">
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
                    <h3 className="font-semibold text-foreground">Técnicos Especializados</h3>
                    <p className="text-muted-foreground text-md">
                    Profesionales con amplia experiencia y <b>prolijidad</b>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Equipos de Primera</h3>
                    <p className="text-muted-foreground text-md">
                    Cámaras de marcas líderes con <b>garantía oficial</b>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Soporte 24/7</h3>
                    <p className="text-muted-foreground text-md">
                    Asistencia técnica cuando lo necesites
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Soluciones Escalables</h3>
                    <p className="text-muted-foreground text-md">Sistemas que crecen junto a tu negocio</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Recibir Presupuesto Gratis</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Nombre de la Empresa (opcional)</label>
                  <input type="text" className="w-full px-3 py-2 border border-border rounded-md bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Contacto</label>
                  <input type="text" className="w-full px-3 py-2 border border-border rounded-md bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Número de teléfono</label>
                  <input type="tel" className="w-full px-3 py-2 border border-border rounded-md bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Número de Cámaras Necesitado</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background">
                    <option>1-5 cámaras</option>
                    <option>6-15 cámaras</option>
                    <option>16-30 cámaras</option>
                    <option>30+ cámaras</option>
                  </select>
                </div>
                <Button className="w-full cursor-pointer">Enviar Solicitud</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
