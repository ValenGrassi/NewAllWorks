import Link from "next/link"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import { Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react"
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
              <Image alt="logo" src={Logo} className="w-12" />
                All Works
            </Link>
            
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Servicios</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/servicios/redes" className="hover:text-primary transition-colors">
                  Redes Informáticas
                </a>
              </li>
              <li>
                <a href="/servicios/redes#racks" className="hover:text-primary transition-colors">
                  Racks de Servidores
                </a>
              </li>
              <li>
                <a href="/servicios/camaras" className="hover:text-primary transition-colors">
                  Cámaras de Seguridad
                </a>
              </li>
              <li>
                <a href="/servicios/sat" className="hover:text-primary transition-colors">
                  Antenas Satelitales
                </a>
              </li>
              <li>
                <a href="/servicios/desarrollo" className="hover:text-primary transition-colors">
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
                <a href="/nosotros#historia" className="hover:text-primary transition-colors">
                  Nuestra Historia
                </a>
              </li>
              <li>
                <a href="/nosotros#valores" className="hover:text-primary transition-colors">
                  Nuestros Valores
                </a>
              </li>
              <li>
                <a href="/nosotros#mision" className="hover:text-primary transition-colors">
                  Nuestra Misión
                </a>
              </li>
              {/* <li>
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
                </a> */}
              {/* </li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Contacto</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <Link target="_blank" href={"tel:+541124611212"}><span>+54 (11) 2461-1212</span></Link>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <Link target="_blank" href={"mailto:ventas@allworks.com.ar"}><span>ventas@allworks.com.ar</span></Link>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div>
                  <div>Chubut 1475</div>
                  <div>Buenos Aires, Pilar</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p>&copy; 2025 All Works. Todos los derechos reservados.</p>
          <div className="flex mt-4 md:mt-0">
            <div className="flex">
              <Link target="_blank" href="https://www.google.com/search?q=All+Works+-+Soluciones+Inform%C3%A1ticas+y+Seguridad%0D%0A&sca_esv=adcc7a3865baaa50&hl=es-419&authuser=1&biw=1912&bih=932&sxsrf=AE3TifMPLCWGwe0skpFR-jNdGpu3k-I_yQ%3A1762585347940&ei=A-sOafyUOYHQ1sQP6PSL2QE&ved=0ahUKEwi8orOM_uGQAxUBqJUCHWj6IhsQ4dUDCBE&uact=5&oq=All+Works+-+Soluciones+Inform%C3%A1ticas+y+Seguridad%0D%0A&gs_lp=Egxnd3Mtd2l6LXNlcnAiMUFsbCBXb3JrcyAtIFNvbHVjaW9uZXMgSW5mb3Jtw6F0aWNhcyB5IFNlZ3VyaWRhZApIkxhQ5BJY5BJwBXgAkAEAmAEAoAEAqgEAuAEDyAEA-AEC-AEBmAIAoAIAmAMAiAYBkgcAoAcAsgcAuAcAwgcAyAcA&sclient=gws-wiz-serp">
                <Button className="cursor-pointer" variant="ghost" size="icon">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M32.582 370.734C15.127 336.291 5.12 297.425 5.12 256c0-41.426 10.007-80.291 27.462-114.735C74.705 57.484 161.047 0 261.12 0c69.12 0 126.836 25.367 171.287 66.793l-73.31 73.309c-26.763-25.135-60.276-38.168-97.977-38.168-66.56 0-123.113 44.917-143.36 105.426-5.12 15.36-8.146 31.65-8.146 48.64 0 16.989 3.026 33.28 8.146 48.64l-.303.232h.303c20.247 60.51 76.8 105.426 143.36 105.426 34.443 0 63.534-9.31 86.341-24.67 27.23-18.152 45.382-45.148 51.433-77.032H261.12v-99.142h241.105c3.025 16.757 4.654 34.211 4.654 52.364 0 77.963-27.927 143.592-76.334 188.276-42.356 39.098-100.305 61.905-169.425 61.905-100.073 0-186.415-57.483-228.538-141.032v-.233z"/></svg>
                </Button>
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/company/all-works-ingenieria">
                <Button className="cursor-pointer" variant="ghost" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.64"><rect width="512" height="509.64" rx="115.61" ry="115.61"/><path fill="#fff" d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"/></svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
