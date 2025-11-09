import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Select } from "./ui/select"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ponete en contacto</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          ¿Listo para transformar tu negocio con nuestras soluciones?<br/> Empecemos a trabajar en tu proyecto hoy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Envianos un mensaje:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Select defaultValue="">
                <option value="" disabled>
                  Seleccioná un servicio
                </option>
                <option value="opcion1">Opción 1</option>
                <option value="opcion2">Opción 2</option>
                <option value="opcion3">Opción 3</option>
              </Select>
              <Input placeholder="Nombre de la empresa" />
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Número de telefono" type="tel" />
              <Textarea placeholder="Contanos sobre tu proyecto..." className="min-h-32" />
              <Button className="w-full">Enviar Mensaje</Button>
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
