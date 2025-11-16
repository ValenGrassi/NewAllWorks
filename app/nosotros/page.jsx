"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, Users, Target, Award, Lightbulb, Handshake, Scale } from "lucide-react"
import Image from "next/image"
import AboutUs from "../../public/aboutUs.png"
import Norby from "../../public/norby.jpeg"
import americatampas from "../../public/empresas/americatampas.png"
import atl from "../../public/empresas/atl.jpg"
import cinecolor from "../../public/empresas/Cinecolor Final.jpg"
import cinemark from "../../public/empresas/cinemark-hoyts-cuadrado.png"
import cinepolis from "../../public/empresas/cinepolis.png"
import dze from "../../public/empresas/DZE Final.jpg"
import feedback from "../../public/empresas/Feedback Seguridad.jpg"
import fundacion from "../../public/empresas/fundacion.png"
import mccan from "../../public/empresas/mccan.jpg"
import multiplex from "../../public/empresas/multiplex.jpg"
import nomade from "../../public/empresas/nomade.png"
import nubo from "../../public/empresas/nubo.jpg"
import Rotofrance from "../../public/empresas/Rotofrance Final.jpg"
import showcase from "../../public/empresas/showcase.png"
import sonrisas from "../../public/empresas/sonrisas_argentinas_logo.jpg"
import sti from "../../public/empresas/sti.png"
import wamco from "../../public/empresas/Wamco Final.jpg"
import zarate from "../../public/empresas/zarate.png" 

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20" id="historia">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">ALL WORKS</h1>
            <p className="text-xl text-muted-foreground text-pretty">Ofreciendo soluciones tecnológicas con pasión y dedicación desde el <b>día uno</b>.</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-foreground mb-6">Nuestra Historia</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Nuestra empresa nació en los 90's con una idea clara: la tecnología debe simplificar, no complicar. Lo que empezó con un grupo de técnicos apasionados se transformó en un equipo que brinda soluciones integrales en cámaras, redes y desarrollo a empresas de todo el país.</p>
                  <p>Aprendimos trabajando, enfrentando desafíos reales, optimizando instalaciones y viendo cómo cada sistema terminado aportaba valor a quienes confiaron en nosotros. Esas experiencias nos formaron y nos dieron la visión que hoy aplicamos en cada proyecto.</p>
                  <p>En cada trabajo que realizamos buscamos algo más que cumplir: buscamos mejorar, innovar y garantizar que cada cliente tenga la seguridad, conectividad y confianza que su empresa necesita para seguir creciendo. Eso es lo que nos motiva día a día.</p>
                </div>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Users className="w-32 h-32 text-primary/40" />
                  <Image src={AboutUs} className="w-full h-full aspect-square rounded-2xl" />
                </div>
              </div>
              
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {[
            { number: "+30", label: "Años en el rubro" },
            { number: "+1000", label: "Proyectos con éxito" },
            { number: "+300", label: "Clientes satisfechos" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30" id="valores">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nuestros Valores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Los principios que guian todo lo que hacemos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Integridad</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Creemos en comunicación honesta, precios claros y justos, no queremos más que lo que nos merecemos.</p>
            </div>

            <div className="bg-background rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Innovación</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Nos mantenemos al día con las nuevas tecnologías para brindar soluciones efectivas y perfectas para el futuro.</p>
            </div>

            <div className="bg-background rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Compromiso</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Tu éxito es nuestro éxito. Crecemos junto a vos, construyendo relaciones basadas en confianza y resultados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Conocé nuestro equipo</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Profesionales dedicados a hacer posible tu éxito</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Award, title: "certifiedEngineers", desc: "certifiedEngineersDesc" },
              { icon: Users, title: "dedicatedSupport", desc: "dedicatedSupportDesc" },
              { icon: Target, title: "projectManagers", desc: "projectManagersDesc" },
              { icon: Lightbulb, title: "innovationTeam", desc: "innovationTeamDesc" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission Section */}
      {/* <section className="py-16 bg-gradient-to-br">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Nuestra Misión</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">Nuestra misión es brindar soluciones tecnológicas que simplifiquen procesos y potencien el crecimiento de las empresas. Si tu empresa crece, nuestra misión está cumplida.</p>
          </div>
        </div>
      </section> */}

      <section className="py-16" id="mision">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        
        {/* Imagen a la izquierda */}
        <div className="relative order-1 md:order-none">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <Users className="w-32 h-32 text-primary/40" />
            <Image src={Norby} className="w-full h-full aspect-square rounded-2xl" />
          </div>
        </div>

        {/* Texto a la derecha */}
        <div className="flex flex-col gap-10">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <Target className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Nuestra Misión</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Nuestra misión es brindar soluciones tecnológicas que simplifiquen procesos y potencien el crecimiento de las empresas. Si tu empresa crece, nuestra misión está cumplida.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
<section className="py-16 bg-muted/30" id="clientes">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nuestra Cartera de Clientes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Todos ellos confiaron en nosotros</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={"./empresas/AmericanC Final.jpg"} width={400} height={400} className="aspect-square" />
            </div>
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={americatampas} className="aspect-square" />
            </div>
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={atl} className="aspect-square" />
            </div>
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={cinecolor} className="aspect-square" />
            </div>
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={cinemark} className="aspect-square" />
            </div>
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={cinepolis} className="aspect-square" />
            </div>
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={dze} className="aspect-square" />
            </div>
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={feedback} className="aspect-square" />
            </div>
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={fundacion} className="aspect-square" />
            </div>
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={mccan} className="aspect-square" />
            </div>
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={multiplex} className="aspect-square" />
            </div>
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={nomade} className="aspect-square" />
            </div>
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={nubo} className="aspect-square" />
            </div>
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={"./empresas/PowerChina Final.jpg"} width={400} height={400} className="aspect-square" />
            </div>
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={Rotofrance} className="aspect-square" />
            </div>
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={showcase} className="aspect-square" />
            </div>
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={sonrisas} className="aspect-square" />
            </div>
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={sti} className="aspect-square" />
            </div>
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={wamco} className="aspect-square" />
            </div>
            <div className="bg-background rounded-xl p-8 text-center flex items-center justify-center">
              <Image src={zarate} className="aspect-square" />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}
