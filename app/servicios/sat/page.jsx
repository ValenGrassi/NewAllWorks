"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Satellite, Radio, Signal, Globe, CheckCircle, Phone, MapPin, SatelliteDish } from "lucide-react"
import Image from "next/image"
import Antena from "../../../public/showcaseVicenteLopez.jpg"
import Antena2 from "../../../public/cinepolisNeuquen.jpg"
import Starlink from "../../../public/starlink.jpeg"
import Starlink2 from "../../../public/starlink2.jpg"
import StarlinkEnterprise from "../../../public/starlinkEnterprise.png"
import Link from "next/link"
import StarlinkLogo from "../../../public/starlink-logo.png"
import Lujan from "../../../public/cinepolisLujan.jpg"
import Tortugas from "../../../public/cinemarkTortugas.jpg"
import Avellaneda from "../../../public/cinemarkAvellaneda.jpg"
import Unicenter from "../../../public/cinemarkUnicenter.jpg"

export default function SatelliteAntennasPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Satellite className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Instalación de Antenas Satelitales
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Conectate al mundo con sistemas de comunicación profesionales. Desde conexión de internet a transmisión de datos, ofrecemos soluciones satelitales de confianza. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contacto">
                <Button size="lg" className="text-lg px-8 cursor-pointer">
                  Recibir Asesoramiento
                  <Signal className="w-5 h-5 ml-2" />
                </Button>
              </Link>
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
              Sistemas profesionales de antenas satelitales para una conexión <b>confiable</b> y estable
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                {/* <Globe className="w-12 h-12 text-primary mb-4" /> */}
                <Image src={StarlinkLogo} className="w-30 text-primary mb-4" />


                <CardTitle>Internet Satelital</CardTitle>
                <CardDescription>Acceso a internet en cualquier lugar</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Conectividad de alta velocidad</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Equipamiento resistente a cualquier clima</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">24/7 conectado</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <SatelliteDish className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Transmisión de Datos</CardTitle>
                <CardDescription>Instalamos y configuramos sistemas de transmisión de datos punto a punto para garantizar conectividad estable y de alta velocidad entre diferentes ubicaciones</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Enlaces inalámbricos de largo alcance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Alta estabilidad y baja latencia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Soluciones escalables para redes empresariales</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Aplicaciones Satelitales</h2>
            <p className="text-lg text-muted-foreground">Soluciones diversas para múltiples industrias
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-primary-foreground">🚜</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Zonas Rurales y Remotas</h3>
              <p className="text-muted-foreground text-sm">
              Conectividad garantizada en áreas sin acceso a fibra óptica. Ideal para campos, islas, obras o viviendas alejadas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Empresas y Oficinas</h3>
              <p className="text-muted-foreground text-sm">Internet para asegurar continuidad operativa, videoconferencias estables y enlaces dedicados para trabajo crítico.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary-foreground">🏭</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Industrias y Plantas Operativas</h3>
              <p className="text-muted-foreground text-sm">Comunicación segura entre equipos, monitoreo remoto y soporte para sistemas de control industrial.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary-foreground">🏗️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Construcción y Obras</h3>
              <p className="text-muted-foreground text-sm">Internet temporal de alta velocidad para obras en zonas sin infraestructura. Perfecto para cámaras (monitoreo), arquitectos, ingenieros y casillas de obra.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-foreground mb-4">Nuestras Antenas</h2>
      <p className="text-lg text-muted-foreground">
        Antenas instaladas de manera profesional en todo el país.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[ 
        { src: Antena, title: "Showcase Vicente López" },
        { src: Starlink, title: "Starlink Performance" },
        { src: Antena2, title: "Cinépolis Neuquén" },
        { src: Starlink2, title: "Starlink Estándar" },
        { src: Unicenter, title: "Cinépolis Unicenter" },
        { src: Tortugas, title: "Cinemark Tortugas Open Mall" },
        { src: Lujan, title: "Cinépolis Luján" },
        { src: Avellaneda, title: "Cinemark Avellaneda" },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div className="overflow-hidden">
            <Image
              src={item.src}
              alt={item.title}
              className="h-80 w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500" />

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white text-lg font-semibold drop-shadow-md">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      
      {/* <section className="py-16 bg-muted/50 border-t-2 border-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Producto Destacado</h2>
          </div>

          <div className="grid gap-8 max-w-6xl mx-auto">
            <div className="group">
              <div className="bg-muted mb-4 overflow-hidden">
                <Image
                  src={StarlinkEnterprise}
                  alt="Starlink Enterprise"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-semibold text-red-500 mb-1 underline underline-offset-3">Nuevo</span>
              <h3 className="text-lg font-semibold text-foreground mb-1"> Starlink Enterprise - ¡Se conecta directo a tu router!</h3>
              <p className="text-sm text-muted-foreground">Grabación continua 24/7 (AOV) | Duración ilimitada de la batería | Conexión 4G o wifi | Detección de personas I.A. | Imagen 3K UHD </p>
              <p className="text-sm underline">Ver detalles {">"}</p>
            </div>
          </div>
        </div>
      </section> */}

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
                    <Link href="https://www.starlink.com/es-419/support/article/995d9179-23e0-bd81-525e-ecb3a8b9e96c" target="_blank">
                    <Image
                      src={StarlinkEnterprise}
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
                    Starlink Enterprise
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                    Ideal para uso intensivo y aplicaciones empresariales en ubicaciones fijas
                    </p>

                    <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1" />
                        <span className="font-medium text-foreground">¡Se conecta directo a tu router!</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1" />
                        <span>Alta velocidad y baja latencia para aplicaciones empresariales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1" />
                        <span>Instalación y soporte técnico prioritario</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1" />
                        <span>SLA del 99,9%</span>
                      </li>
                    </ul>
                  </div>

                  {/* CTA alineado a la derecha */}
                  <div className="flex items-center justify-start mt-4">
                    <Link
                      href="https://www.starlink.com/es-419/support/article/995d9179-23e0-bd81-525e-ecb3a8b9e96c"
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

      {/* Installation Process */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nuestro Proceso</h2>
            <p className="text-lg text-muted-foreground">Instalación satelital en 5 simples pasos</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Estudio del Lugar",
                description: "Assess location, line-of-sight, and mounting requirements",
              },
              {
                step: "02",
                title: "Diseño del Sistema",
                description: "Configure optimal satellite system for your needs",
              },
              {
                step: "03",
                title: "Instalación",
                description: "Install antenna, mount, and associated equipment",
              },
              {
                step: "04",
                title: "Captación de Señal",
                description: "Precise satellite pointing and signal optimization",
              },
              {
                step: "05",
                title: "Pruebas y Optimización",
                description: "System testing and user training",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
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
                    <h3 className="font-semibold text-foreground">Instalaciones Certificadas</h3>
                    <p className="text-muted-foreground text-sm">Licensed technicians with satellite expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Equipamiento Profesional</h3>
                    <p className="text-muted-foreground text-sm">Professional-grade antennas and components</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Potección al clima</h3>
                    <p className="text-muted-foreground text-sm">All-weather installation and equipment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Soporte continuo</h3>
                    <p className="text-muted-foreground text-sm">Maintenance and technical support services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg p-8 border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Asesoramiento Satelital</h3>
              <form
  className="space-y-4"
  action="https://formspree.io/f/xayzwvry"
  method="POST"
  onSubmit={async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const submitBtn = form.querySelector("button");
    const originalText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando...";

    const data = new FormData(form);

    const res = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      submitBtn.textContent = "Enviado ✓";
      form.reset();

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }, 2500);
    } else {
      submitBtn.disabled = false;
      submitBtn.textContent = "Error, reintentar";
      setTimeout(() => (submitBtn.textContent = originalText), 2500);
    }
  }}
>
  <div>
    <label className="block text-sm font-medium text-foreground mb-1">
      Nombre Tuyo / Nombre de tu Empresa
    </label>
    <input
      name="nombre"
      type="text"
      required
      className="w-full px-3 py-2 border border-border rounded-md bg-background"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-foreground mb-1">
      Número de teléfono
    </label>
    <input
      name="telefono"
      type="tel"
      required
      className="w-full px-3 py-2 border border-border rounded-md bg-background"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-foreground mb-1">
      Ubicación
    </label>
    <input
      name="ubicacion"
      type="text"
      required
      className="w-full px-3 py-2 border border-border rounded-md bg-background"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-foreground mb-1">
      Tipo de Servicio
    </label>
    <select
      name="servicio"
      className="w-full px-3 py-2 border border-border rounded-md bg-background"
    >
      <option>Internet Satelital</option>
      <option>Transmisión de Datos</option>
    </select>
  </div>

  <div>
    <label className="block text-sm font-medium text-foreground mb-1">
      Requerimientos Especiales
    </label>
    <textarea
      name="requerimientos"
      className="w-full px-3 py-2 border border-border rounded-md bg-background"
      rows={3}
      placeholder="Describí cualquier necesidad específica..."
    ></textarea>
  </div>

  <Button className="w-full cursor-pointer" type="submit">
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
