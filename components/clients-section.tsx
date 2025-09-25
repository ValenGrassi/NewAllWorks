"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Factory, ShoppingBag, GraduationCap, Heart, Briefcase } from "lucide-react"

const clients = [
  {
    name: "TechCorp Industries",
    industry: "Manufacturing",
    icon: Factory,
    services: ["Network Infrastructure", "Security Cameras", "Server Racks"],
    testimonial: "Outstanding service and technical expertise. Our production line monitoring is now seamless.",
    logo: "/tech-company-logo.jpg",
  },
  {
    name: "Metro Healthcare",
    industry: "Healthcare",
    icon: Heart,
    services: ["Satellite Communications", "CCTV Network", "Solar Power"],
    testimonial: "Reliable 24/7 connectivity for our critical healthcare operations.",
    logo: "/healthcare-logo.png",
  },
  {
    name: "Retail Solutions Group",
    industry: "Retail",
    icon: ShoppingBag,
    services: ["Camera Systems", "Network Installation", "Custom Software"],
    testimonial: "Comprehensive security solution across all our retail locations.",
    logo: "/abstract-retail-logo.png",
  },
  {
    name: "University of Innovation",
    industry: "Education",
    icon: GraduationCap,
    services: ["Campus Network", "Solar Installation", "Development Services"],
    testimonial: "Modern infrastructure supporting our digital transformation initiatives.",
    logo: "/generic-university-logo.png",
  },
  {
    name: "Global Logistics Ltd",
    industry: "Logistics",
    icon: Briefcase,
    services: ["Satellite Tracking", "Security Systems", "Server Infrastructure"],
    testimonial: "Real-time tracking and monitoring capabilities have revolutionized our operations.",
    logo: "/logistics-company-logo.png",
  },
  {
    name: "Downtown Office Complex",
    industry: "Real Estate",
    icon: Building2,
    services: ["Building Automation", "Security Cameras", "Network Systems"],
    testimonial: "Smart building solutions that enhance tenant experience and operational efficiency.",
    logo: "/real-estate-logo.png",
  },
]

export function ClientsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Trusted Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Companies That Trust Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From startups to enterprise organizations, we deliver technology solutions that drive business success
            across diverse industries.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "150+", label: "Active Clients" },
            { number: "99.9%", label: "Uptime Guarantee" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => {
            const IconComponent = client.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  {/* Client Logo */}
                  <div className="flex items-center justify-between mb-6">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} logo`}
                      className="h-8 opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{client.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {client.industry}
                    </Badge>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {client.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="text-sm text-muted-foreground italic leading-relaxed">
                    "{client.testimonial}"
                  </blockquote>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">Ready to join our growing list of satisfied clients?</p>
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-px bg-border"></div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Get Started Today</span>
            <div className="w-12 h-px bg-border"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
