"use client"

import { Eye, Wifi, Sun, Code, Zap, DollarSign, Rocket, Phone } from "lucide-react"
import LogoAW from "../public/logoAwCompleto.png"
import LogoAWS from "../public/logoAwsCompleto.png"
import LogoAWP from "../public/AllWorksPages.png"
import Image from "next/image"
import Link from "next/link"

const uniqueApproach = [
  {
    icon: LogoAW,
    title: "All Works Ingeniería",
    desc: "Redes que nunca duermen",
    gradient: "from-gray-50 to-gray-200 shadow-md shadow-gray-400/30",
    link: "/nosotros"
  },
  {
    icon: LogoAWS,
    title:"All Works Satelites",
    desc: "Energía limpia, sistemas inteligentes",
    gradient: "from-gray-50 to-gray-200 shadow-md shadow-gray-400/30",
    link: "/servicios/sat"
  },
  {
    icon: LogoAWP,
    title: "All Works Pages",
    desc:"Software construido para durar",
    gradient: "from-gray-50 to-gray-200 shadow-md shadow-gray-400/30",
    link: "/servicios/desarrollo"
  },
]



const whatMakesUsSpecial = [
  {
    icon: Rocket,
    title: "Listo para el Futuro" ,
    desc: "Última tecnología del mercado" ,
  },
  {
    icon: DollarSign,
    title: "Sin Sorpresas" ,
    desc: "Precios fijos, tiempos claros" ,
  },
  {
    icon: Phone,
    title: "A Una Llamada" ,
    desc: "Soporte cuando lo necesites",
  },
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Nuestras Marcas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Tecnología Hecha Simple</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {uniqueApproach.map((item, index) => {
            return (
                <div key={index} className="group cursor-pointer">
                  <Link href={item.link}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 border border-gray-100">
                      <div className={`h-48 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300`}>
                        <Image src={item.icon} className="text-white p-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </Link>
                </div>
            )
          })}
        </div>

        {/* <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-8 lg:p-12 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>

          <div className="relative z-10 cursor-context-menu">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping delay-75"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping delay-150"></div>
                <span className="text-blue-200">
                  VENTAJAS DE ELEGIRNOS
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                ¿Por Qué Nos Eligen?
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                  Tres protocolos centrales que definen nuestra excelencia operacional
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whatMakesUsSpecial.map((item, index) => {
              const IconComponent = item.icon
              return (<div key={index} className="group relative">
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-blue-400/50 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-blue-400/50 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto border border-white/10 group-hover:border-blue-400/50 transition-all duration-300">
                        <IconComponent className="group-hover:scale-110 transition-all duration-300"/>
                       
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                    </div>

                    <div className="text-center">
                      <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full opacity-50 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div> */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">¿Querés saber más sobre nosotros?</p>
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-px bg-border"></div>
            <Link href="/nosotros" className="text-sm text-muted-foreground uppercase tracking-wider hover:scale-110 transition-all">Nuestra Historia</Link>
            <div className="w-12 h-px bg-border"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
