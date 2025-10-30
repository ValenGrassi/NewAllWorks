"use client"

import { Button } from "@/components/ui/button"
import { Menu, Phone, Mail, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Logo from "../public/prueba.png"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRef, useState, useEffect } from "react"

export function Header() {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef(null)
  const contentRef = useRef(null)
  const closeTimer = useRef(null)

  const OPEN_DELAY = 80   // pequeño delay para evitar que abra con un movimiento accidental
  const CLOSE_DELAY = 180 // evita flicker al pasar el mouse rápidamente

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current)
        closeTimer.current = null
      }
    }
  }, [])

  const clearClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  // helper: detecta si en el composedPath está el nodo "other"
  const pathIncludes = (e, otherEl) => {
    try {
      const path = e.composedPath ? e.composedPath() : (e.nativeEvent?.composedPath ? e.nativeEvent.composedPath() : [])
      return otherEl && path && path.includes(otherEl)
    } catch {
      // fallback con relatedTarget (menos confiable con portals)
      return otherEl && e.relatedTarget && otherEl.contains ? otherEl.contains(e.relatedTarget) : false
    }
  }

  // Entradas: abrir (con pequeño delay)
  const onTriggerEnter = () => {
    clearClose()
    // si ya está abierto, nada; si no, abrimos con un pequeño delay
    if (!open) {
      // small debounced open
      closeTimer.current = setTimeout(() => {
        setOpen(true)
        clearClose()
      }, OPEN_DELAY)
    }
  }

  // Leave del trigger: si el pointer fue al content, no cerrar; caso contrario schedule close
  const onTriggerLeave = (e) => {
    clearClose()
    if (pathIncludes(e, contentRef.current)) {
      // se movió hacia el menú -> no cerrar
      return
    }
    // schedule close
    closeTimer.current = setTimeout(() => {
      setOpen(false)
      closeTimer.current = null
    }, CLOSE_DELAY)
  }

  const onContentEnter = () => {
    clearClose()
  }

  const onContentLeave = (e) => {
    clearClose()
    if (pathIncludes(e, triggerRef.current)) {
      // se movió hacia el trigger -> no cerrar
      return
    }
    closeTimer.current = setTimeout(() => {
      setOpen(false)
      closeTimer.current = null
    }, CLOSE_DELAY)
  }

  // click toggle (útil en móvil / teclado)
  const onTriggerClick = () => {
    // en escritorio el hover gobierna, pero permitimos click toggle también
    setOpen((v) => !v)
  }

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Nav */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-xl font-bold text-foreground hover:text-primary mx-8 hover:opacity-80 transition-all">
              <Image src={Logo} alt="Logo" className="w-10" />
              All Works
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/nosotros" className="text-foreground hover:text-primary transition-opacity hover:opacity-70">Nosotros</Link>

              <DropdownMenu open={open} onOpenChange={setOpen}>
                <div className="relative">
                  <DropdownMenuTrigger
                    ref={triggerRef}
                    onPointerEnter={onTriggerEnter}
                    onPointerLeave={onTriggerLeave}
                    onClick={onTriggerClick}
                    className="flex items-center space-x-1 text-foreground hover:text-primary cursor-pointer transition-all"
                  >
                    <span>Servicios</span>
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    ref={contentRef}
                    sideOffset={6}
                    onPointerEnter={onContentEnter}
                    onPointerLeave={onContentLeave}
                    className="cursor-pointer"
                  >
                    <DropdownMenuItem asChild><Link href="/servicios/camaras">Cámaras de Seguridad</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/servicios/redes">Redes Informáticas</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/servicios/paneles">Paneles Solares</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/servicios/sat">Antenas Satelitales</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/servicios/desarrollo">Servicios de desarrollo</Link></DropdownMenuItem>
                  </DropdownMenuContent>
                </div>
              </DropdownMenu>

              <Link href="/#expertise" className="text-foreground hover:text-primary transition-all hover:opacity-70">Clientes</Link>
              <Link href="/#contact" className="text-foreground hover:text-primary transition-all hover:opacity-70">Contacto</Link>
            </nav>
          </div>

          {/* Contacto + Botones */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-black transition-all"><Phone className="w-4 h-4" /><span>+54 11 2461 1212</span></div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-black transition-all"><Mail className="w-4 h-4" /><span>ventas@allworks.com</span></div>
            </div>

            <Button className="hidden md:inline-flex rounded-full cursor-pointer">
              {/* WhatsApp svg (omitido path largo) */}
{/* Whatsapp SVG */}
<svg
                className="invert"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>WhatsApp icon</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>            </Button>

            <Button variant="ghost" size="icon" className="md:hidden"><Menu className="w-5 h-5" /></Button>
          </div>
        </div>
      </div>
    </header>
  )
}
