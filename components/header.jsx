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
                    <DropdownMenuItem asChild><Link href="/servicios/camaras">Instalación de cámaras</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/servicios/redes">Instalación de redes</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/servicios/paneles">Paneles solares</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/servicios/sat">Antenas Satelitales</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/servicios/racks">Racks</Link></DropdownMenuItem>
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
              <svg className="invert" width="24" height="24" viewBox="0 0 24 24"><path d="M17.472 14.382c..."/></svg>
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden"><Menu className="w-5 h-5" /></Button>
          </div>
        </div>
      </div>
    </header>
  )
}
