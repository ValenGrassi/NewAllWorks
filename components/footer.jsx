import Link from "next/link"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Logo from "../public/prueba.png"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center text-2xl font-bold text-foreground hover:text-primary transition-colors p-2">
              <Image src={Logo} className="w-12" />
                All Works
            </Link>
            
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Servicios</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cámaras de Seguridad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Antenas Satelitales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Instalación de Redes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Racks de Servidores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Paneles Solares
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Desarrollo Web
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Compañía</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Nuestra Historia
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Valores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Misión
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@techsolutions.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div>
                  <div>123 Technology Drive</div>
                  <div>Tech City, TC 12345</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p>&copy; 2025 All Works. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <div className="flex space-x-2">

              <Button variant="ghost" size="icon">
                <Instagram className="w-8 h-8" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="w-8 h-8" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
