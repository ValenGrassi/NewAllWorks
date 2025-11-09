// components/Header.jsx
"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button" // si estás usando tu Button
import DropdownTippy from "./ui/DropdownTippy"
import { Menu, Phone, Mail, ChevronDown, X, Linkedin } from "lucide-react"
import Logo from "../public/prueba.png"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="mx-auto py-4 px-4 md:px-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-xl font-bold text-foreground hover:text-primary mx-2 md:mx-8 hover:opacity-80 transition-all">
              <Image src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
              <span className="ml-1">All Works</span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-opacity hover:opacity-70">Inicio</Link>
            <Link href="/nosotros" className="text-foreground hover:text-primary transition-opacity hover:opacity-70">Nosotros</Link>

            {/* Servicios con Tippy (hover) */}
            <DropdownTippy
              trigger={
                <button
                  className="flex items-center space-x-1 text-foreground hover:text-primary cursor-pointer transition-all"
                  aria-haspopup="menu"
                  aria-expanded="false"
                >
                  <span>Servicios</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              }
              placement="bottom-start"
              delay={[80, 180]}
              interactive={true}
            >
              <div className="min-w-[14rem] bg-popover text-popover-foreground rounded-md border p-1 shadow-md">
                <Link href="/servicios/camaras" className="block px-3 py-2 text-sm hover:bg-accent/60 rounded">Cámaras de Seguridad</Link>
                <Link href="/servicios/redes" className="block px-3 py-2 text-sm hover:bg-accent/60 rounded">Redes Informáticas</Link>
                <Link href="/servicios/redes#racks" className="block px-3 py-2 text-sm hover:bg-accent/60 rounded">Racks</Link>
                <Link href="/servicios/sat" className="block px-3 py-2 text-sm hover:bg-accent/60 rounded">Antenas Satelitales</Link>
                <Link href="/servicios/desarrollo" className="block px-3 py-2 text-sm hover:bg-accent/60 rounded">Servicios de desarrollo</Link>
              </div>
            </DropdownTippy>

            <Link href="/#expertise" className="text-foreground hover:text-primary transition-all hover:opacity-70">Clientes</Link>
            <Link href="/#contact" className="text-foreground hover:text-primary transition-all hover:opacity-70">Contacto</Link>
          </nav>
          </div>

          {/* Contacto + Buttons (desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-black transition-all"><Phone className="w-4 h-4" /><span>+54 11 2461 1212</span></div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-black transition-all"><Mail className="w-4 h-4" /><span>ventas@allworks.com</span></div>
            </div> */}

            <Button className="hidden md:inline-flex rounded-md cursor-pointer ">
              <Linkedin/>
            </Button>
            <Button className="hidden md:inline-flex rounded-md cursor-pointer ">
              <svg className="invert" width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M32.582 370.734C15.127 336.291 5.12 297.425 5.12 256c0-41.426 10.007-80.291 27.462-114.735C74.705 57.484 161.047 0 261.12 0c69.12 0 126.836 25.367 171.287 66.793l-73.31 73.309c-26.763-25.135-60.276-38.168-97.977-38.168-66.56 0-123.113 44.917-143.36 105.426-5.12 15.36-8.146 31.65-8.146 48.64 0 16.989 3.026 33.28 8.146 48.64l-.303.232h.303c20.247 60.51 76.8 105.426 143.36 105.426 34.443 0 63.534-9.31 86.341-24.67 27.23-18.152 45.382-45.148 51.433-77.032H261.12v-99.142h241.105c3.025 16.757 4.654 34.211 4.654 52.364 0 77.963-27.927 143.592-76.334 188.276-42.356 39.098-100.305 61.905-169.425 61.905-100.073 0-186.415-57.483-228.538-141.032v-.233z"/></svg>
            </Button>
            <Link className="flex" href="https://wa.me/541124611212?text=Hola!%20Vengo%20de%20su%20p%C3%A1gina%20web%20y%20quiero%20saber%20m%C3%A1s%20sobre...">
              <Button className="hidden md:inline-flex rounded-md cursor-pointer mr-8">
                <svg className="invert" width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" > <title>WhatsApp icon</title> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /> </svg>             
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(v => !v)}
              className="p-2 rounded-md hover:bg-muted"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile panel: se despliega cuando mobileOpen = true */}
        <div
          className={`md:hidden mt-3 transition-max-h duration-300 overflow-hidden ${mobileOpen ? "max-h-[1000px]" : "max-h-0"}`}
          aria-hidden={!mobileOpen}
        >
          <div className="bg-popover border rounded-md p-4 space-y-3 shadow-sm">
            {/* Links (vertical) */}
            <Link href="/nosotros" className="block text-foreground hover:text-primary">Nosotros</Link>

            {/* Aquí replico el menú servicios en mobile como acordeón simple */}
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer list-none py-2">
                <span>Servicios</span>
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-2 pl-2 space-y-1">
                <Link href="/servicios/camaras" className="block px-2 py-1 rounded hover:bg-accent/60">Cámaras de Seguridad</Link>
                <Link href="/servicios/redes" className="block px-2 py-1 rounded hover:bg-accent/60">Redes Informáticas</Link>
                <Link href="/servicios/redes#racks" className="block px-2 py-1 rounded hover:bg-accent/60">Racks</Link>
                <Link href="/servicios/sat" className="block px-2 py-1 rounded hover:bg-accent/60">Antenas Satelitales</Link>
                <Link href="/servicios/desarrollo" className="block px-2 py-1 rounded hover:bg-accent/60">Servicios de desarrollo</Link>
              </div>
            </details>

            <Link href="/#clientes" className="block text-foreground hover:text-primary">Clientes</Link>
            <Link href="/#contact" className="block text-foreground hover:text-primary">Contacto</Link>

            <div className="pt-2 border-t mt-2">
              <div className="flex items-center justify-evenly space-x-2 text-sm text-muted-foreground">
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
              <div className="mt-3">
                <Link target="_blank" href=""><Button className="w-full">Contactar por WhatsApp</Button></Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header
