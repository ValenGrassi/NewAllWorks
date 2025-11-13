import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Database, Smartphone, CheckCircle, Phone, Rocket } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Sar from "../../../public/sar.png"
import Sar2 from "../../../public/SAR3.png"


export default function DevelopmentServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Desarrollo de Software Personalizado
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Transformá tu empresa con páginas web, aplicaciones móvil y sistemas complejos con bases de datos. Nuestro equipo de desarrollo te entrega soluciones escalables hechas a medida para tus necesidades. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link className="cursor-pointer" href="#contacto">
                <Button size="lg" className="cursor-pointer text-lg px-8">
                  <Rocket className="w-5 h-5 mr-2" />
                  Empezá Tu Proyecto
                </Button>
              </Link>
              <Link className="cursor-pointer" href="tel:+541124611212">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent cursor-pointer">
                  <Phone className="w-5 h-5 mr-2" />
                  Discutir Ideas
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
              Desarrollo full-stack desde la idea al despliegue
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Aplicaciones Web</CardTitle>
                <CardDescription>Páginas web modernas creadas con las últimas tecnologías
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Diseño enfocado en UX/UI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Diseño Responsivo (para todos los dispositivos)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Optimizado para SEO</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Sistemas Full-Stack</CardTitle>
                <CardDescription>
                  Sistemas backend completos con bases de datos y APIs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Relación entre frontend y backend</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Diseño de base de datos <b>optimizada</b></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Despliego del sistema completo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Smartphone className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Aplicaciones Móvil</CardTitle>
                <CardDescription>
                  Aplicaciones móvil nativas y multi-plataformas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">iOS y Android</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">React Native</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Despliego en App Store y Google Play</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nuestro Stack Especializado</h2>
            <p className="text-lg text-muted-foreground">
            Tecnologías modernas para soluciones escalables y mantenibles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Astro</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Prisma</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">Mongoose</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Bases de Datos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Supabase</Badge>
                  <Badge variant="secondary">Firebase</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cloud y DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Vercel</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">GitHub</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-muted/50 border-t-2 border-muted">
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
                  <Link
                      href="https://cinemark-it.netlify.app/"
                      target="_blank"
                    >
                    <Image
                      src={Sar2}
                      alt="Sistema Autogestión de Racks"
                      className="w-full h-full transform transition-transform duration-500 hover:scale-105 object-center"
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
                      MVP Sistema de Autogestión de Racks
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                    Cálculos de consumo, cambios de baterías de UPS, detección de errores, con SAR gestionas todos los detalles de tu rack.
                    </p>

                    <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1" />
                        <span className="font-medium text-foreground">¡Todo editable desde la página!</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1" />
                        <span>Customizable a tus necesidades</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1" />
                        <span>Despliego y soporte profesional</span>
                      </li>
                    </ul>
                  </div>

                  {/* CTA alineado a la derecha */}
                  <div className="flex items-center justify-start mt-4">
                    <Link
                      href="https://cinemark-it.netlify.app/"
                      target="_blank"
                      className="inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
                      aria-label="Ver detalles Starlink Enterprise"
                    >
                      <span className="text-sm font-medium text-primary group-hover:underline transition duration-200">Ir a la prueba piloto</span>
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

      {/* Project Types */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Proyectos Concretos que Creamos</h2>
            <p className="text-lg text-muted-foreground">Soluciones reales para necesidades reales: comercio, gestión y datos para empresas.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Plataformas E-commerce</CardTitle>
                <CardDescription>Diseñamos tiendas optimizadas para conversión (checkout rápido, SEO técnico y rendimiento) y las integramos con sistemas de reservas cuando el negocio necesita agenda o turnos.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Carrito de compras y pasarelas de pago seguras</li>
                  <li>• Integración con sistemas de reservas o turnos</li>
                  <li>• Gestión de inventario y seguimiento de pedidos</li>
                  <li>• Diseño adaptable a dispositivos móviles</li>
                  <li>• Análisis de ventas e informes automáticos</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gestión Empresarial</CardTitle>
                <CardDescription>Desarrollamos sistemas que centralizan la gestión del negocio (proyectos, inventarios y reportes) con automatización y análisis en tiempo real para mejorar la eficiencia y la toma de decisiones.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• CRM para clientes y seguimiento comercial</li>
                  <li>• Gestión de tareas, proyectos y recursos</li>
                  <li>• Control de stock, facturación y presupuestos</li>
                  <li>• Automatización de flujos internos</li>
                  <li>• Dashboards con indicadores clave del negocio</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Análisis de Datos</CardTitle>
                <CardDescription>Creamos paneles de datos y reportes automáticos que transforman información en decisiones, con visualizaciones claras, integración de APIs y métricas personalizadas.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Paneles en tiempo real y visualizaciones claras</li>
                  <li>• Integración de APIs y fuentes externas</li>
                  <li>• Reportes automáticos y personalizados</li>
                  <li>• Análisis predictivo para decisiones estratégicas</li>
                  <li>• Herramientas de inteligencia de negocios (BI)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16" id="contacto">
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
                    <h3 className="font-semibold text-foreground">Programadores con Experiencia</h3>
                    <p className="text-muted-foreground text-sm">Todos nuestros desarrolladores cuentan con +4 años de experiencia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Tecnologías Modernas</h3>
                    <p className="text-muted-foreground text-sm">Buenas prácticas utilizando los últimos frameworks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Metodología Ágil</h3>
                    <p className="text-muted-foreground text-sm">Tiempos fijos y presupuestos claros</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Soporte y Mantenimiento</h3>
                    <p className="text-muted-foreground text-sm">Mantenimiento, actualizaciones y solución de bugs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg p-8 border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Empezá tu Proyecto</h3>
              <form className="space-y-4">
              <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Nombre de la Empresa (opcional)</label>
                  <input type="text" className="w-full px-3 py-2 border border-border rounded-md bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Número de teléfono</label>
                  <input type="tel" className="w-full px-3 py-2 border border-border rounded-md bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Tipo de Proyecto</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background">
                    <option>Aplicación Web</option>
                    <option>App Móvil</option>
                    <option>Sistema Full-Stack</option>
                    <option>Plataforma E-Commerce</option>
                    <option>Solución Personalizada</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Tiempo de Entrega</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background">
                    <option>Menos de 1 mes</option>
                    <option>1-6 meses</option>
                    <option>6-12 meses</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Descripción del Proyecto</label>
                  <textarea
                    className="w-full px-3 py-2 border border-border rounded-md bg-background"
                    rows={4}
                    placeholder="Describí tus requerimientos, objetivos y cualquier funcionalidad específica que necesites..."
                  ></textarea>
                </div>
                <Button className="w-full">
                  <Rocket className="w-4 h-4 mr-2" />
                  Enviar Solicitud
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
