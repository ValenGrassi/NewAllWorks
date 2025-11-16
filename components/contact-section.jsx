"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import { Select } from "./ui/select"

export function ContactSection() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    const form = e.target
    const data = new FormData(form)

    // Enviar a Formspree
    await fetch("https://formspree.io/f/xayzwvry", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })

    // Reset form y estados
    form.reset()
    setSending(false)
    setSent(true)

    // Volver el botón a la normalidad después de 3s
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ponete en contacto</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Listo para transformar tu negocio con nuestras soluciones?<br /> Empecemos a trabajar en tu proyecto hoy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Envianos un mensaje:</CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">

                <Input 
                  placeholder="Nombre Tuyo / Nombre de tu Empresa"
                  name="nombre"
                  required
                />

                <select
                  name="servicio"
                  required
                  className="w-full px-3 py-2 border border-border rounded-md bg-background"
                >
                  <option value="">Seleccioná un servicio</option>
                  <option value="redes">Instalación/optimización de redes</option>
                  <option value="camaras">Instalación de cámaras</option>
                  <option value="satelital">Instalación satelital</option>
                  <option value="desarrollo_web">Desarrollo de página web</option>
                  <option value="desarrollo_sistema">Desarrollo de sistema</option>
                </select>

                <Input 
                  placeholder="Email (opcional)" 
                  name="email"
                  type="email"
                />

                <Input 
                  placeholder="Número de teléfono"
                  name="telefono"
                  type="tel"
                  required
                />

                <Textarea 
                  placeholder="Contanos sobre tu proyecto..."
                  className="min-h-32"
                  name="mensaje"
                  required
                />

                <Button className="w-full cursor-pointer" type="submit" disabled={sending}>
                  {sending 
                    ? "Enviando..." 
                    : sent 
                      ? "Enviado ✓" 
                      : "Enviar Mensaje"}
                </Button>

              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1 text-2xl">Teléfonos</p>
                    <p className="text-muted-foreground">+054 (011) 2461-1212</p>
                    <p className="text-muted-foreground">+054 (011) 5103-4677</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1 text-2xl">Email</p>
                    <p className="text-muted-foreground">pages@allworks.com.ar</p>
                    <p className="text-muted-foreground">norberto@allworks.com.ar</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1 text-2xl">Oficinas</p>
                    <p className="text-muted-foreground">Chubut 1475</p>
                    <p className="text-muted-foreground">Buenos Aires, Pilar</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  )
}
