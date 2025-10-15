import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Database, Smartphone, CheckCircle, Phone, Rocket } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Panel from "../../../public/camaraPanel.webp"


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
              Custom Software Development
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Transform your business with custom web applications, mobile apps, and full-stack systems. Our development
              team delivers scalable solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                <Phone className="w-5 h-5 mr-2" />
                Discuss Ideas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Development Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full-stack development solutions from concept to deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Aplicaciones Web</CardTitle>
                <CardDescription>Modern, responsive web applications built with latest technologies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">React/Next.js frontend</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Responsive design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">SEO optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Sistemas Full-Stack</CardTitle>
                <CardDescription>Complete backend systems with databases and APIs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">RESTful APIs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Database design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Cloud deployment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Smartphone className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Aplicaciones Móvil</CardTitle>
                <CardDescription>Native and cross-platform mobile app development</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">iOS & Android</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">React Native</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">App store deployment</span>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Technology Stack</h2>
            <p className="text-lg text-muted-foreground">Modern technologies for scalable, maintainable solutions</p>
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
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Vue.js</Badge>
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
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">FastAPI</Badge>
                  <Badge variant="secondary">GraphQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Database</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Redis</Badge>
                  <Badge variant="secondary">Supabase</Badge>
                  <Badge variant="secondary">Firebase</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cloud & DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Vercel</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">GitHub Actions</Badge>
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
                    <Image
                      src={Panel}
                      alt="Starlink Enterprise - terminal satelital empresarial"
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                      priority={false}
                    />
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

      {/* Project Types */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Types of Projects We Build</h2>
            <p className="text-lg text-muted-foreground">Custom solutions for various business needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>E-commerce Platforms</CardTitle>
                <CardDescription>Online stores with payment processing and inventory management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Shopping cart functionality</li>
                  <li>• Payment gateway integration</li>
                  <li>• Inventory management</li>
                  <li>• Order tracking system</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Management</CardTitle>
                <CardDescription>CRM, ERP, and workflow management systems</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Customer relationship management</li>
                  <li>• Project management tools</li>
                  <li>• Reporting dashboards</li>
                  <li>• Workflow automation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Analytics</CardTitle>
                <CardDescription>Business intelligence and data visualization platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Real-time dashboards</li>
                  <li>• Data visualization</li>
                  <li>• Automated reporting</li>
                  <li>• API integrations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Booking Systems</CardTitle>
                <CardDescription>Appointment scheduling and reservation platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Calendar integration</li>
                  <li>• Payment processing</li>
                  <li>• Automated notifications</li>
                  <li>• Resource management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Learning Platforms</CardTitle>
                <CardDescription>Educational and training management systems</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Course management</li>
                  <li>• Progress tracking</li>
                  <li>• Video streaming</li>
                  <li>• Assessment tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Communication Tools</CardTitle>
                <CardDescription>Chat applications and collaboration platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Real-time messaging</li>
                  <li>• File sharing</li>
                  <li>• Video conferencing</li>
                  <li>• Team collaboration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Our Development Team?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Experienced Developers</h3>
                    <p className="text-muted-foreground text-sm">Senior developers with 5+ years experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Modern Technologies</h3>
                    <p className="text-muted-foreground text-sm">Latest frameworks and best practices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Agile Methodology</h3>
                    <p className="text-muted-foreground text-sm">Regular updates and transparent communication</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Ongoing Support</h3>
                    <p className="text-muted-foreground text-sm">Maintenance and feature updates</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg p-8 border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Start Your Project</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Project Type</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background">
                    <option>Web Application</option>
                    <option>Mobile App</option>
                    <option>Full-Stack System</option>
                    <option>E-commerce Platform</option>
                    <option>Custom Solution</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Budget Range</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background">
                    <option>$5,000 - $15,000</option>
                    <option>$15,000 - $50,000</option>
                    <option>$50,000 - $100,000</option>
                    <option>$100,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Timeline</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background">
                    <option>1-3 months</option>
                    <option>3-6 months</option>
                    <option>6-12 months</option>
                    <option>12+ months</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Project Description</label>
                  <textarea
                    className="w-full px-3 py-2 border border-border rounded-md bg-background"
                    rows={4}
                    placeholder="Describe your project requirements, goals, and any specific features you need..."
                  ></textarea>
                </div>
                <Button className="w-full">
                  <Rocket className="w-4 h-4 mr-2" />
                  Get Project Quote
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
