import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  title: 'All Works - Soluciones Informáticas y Seguridad',
  description: 'All Works es un proveedor líder de servicios informáticos y tecnologías de vanguardia. Contactanos para obtener más información sobre cómo podemos ayudarte.',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="es" className='scroll-smooth'>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
