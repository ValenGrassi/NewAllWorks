"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, Users, Target, Award, Lightbulb, Handshake } from "lucide-react"
import Image from "next/image"
import AboutUs from "../../public/aboutUs.png"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Nuestra Historia</h1>
            <p className="text-xl text-muted-foreground text-pretty">Ofreciendo soluciones tecnológicas con pasión y dedicación desde el <b>día uno</b>.</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Nuestra Historia</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Nuestra empresa nació con una idea clara: la tecnología debe simplificar, no complicar. Lo que empezó con un grupo de técnicos apasionados se transformó en un equipo que brinda soluciones integrales en cámaras, redes y desarrollo a empresas de todo el país.</p>
                  <p>Aprendimos trabajando, enfrentando desafíos reales, optimizando instalaciones y viendo cómo cada sistema terminado aportaba valor a quienes confiaron en nosotros. Esas experiencias nos formaron y nos dieron la visión que hoy aplicamos en cada proyecto.</p>
                  <p>En cada trabajo que realizamos buscamos algo más que cumplir: buscamos mejorar, innovar y garantizar que cada cliente tenga la seguridad, conectividad y confianza que su empresa necesita para seguir creciendo. Eso es lo que nos motiva día a día.</p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Users className="w-32 h-32 text-primary/40" />
                  <Image src={AboutUs} className="w-full h-full aspect-square rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nuestros Valores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Los principios que guian todo lo que hacemos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Integridad</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">We believe in honest communication, transparent pricing, and doing what's right—even when no one is watching.</p>
            </div>

            <div className="bg-background rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Innovación</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">We stay ahead of technology trends to bring you the most effective and future-proof solutions.</p>
            </div>

            <div className="bg-background rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Partnership</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Your success is our success. We're here for the long haul, supporting you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
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
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Nuestra Misión</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">To empower businesses with reliable, innovative technology solutions delivered with integrity and care. We're not just service providers—we're your technology partners, invested in your long-term success.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
