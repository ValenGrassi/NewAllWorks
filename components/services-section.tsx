import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Satellite, Network, Server, Sun, Code, Globe, Database } from "lucide-react"

const hardwareServices = [
  {
    icon: Camera,
    title: "Security Camera Installation",
    description: "Professional CCTV systems with remote monitoring capabilities for complete security coverage.",
  },
  {
    icon: Satellite,
    title: "Satellite Antenna Setup",
    description: "High-performance satellite communication systems for reliable connectivity anywhere.",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description: "Complete network design, installation, and optimization for seamless connectivity.",
  },
  {
    icon: Server,
    title: "Server Rack Installation",
    description: "Professional server rack setup with proper cooling, power management, and organization.",
  },
  {
    icon: Sun,
    title: "Solar Panel Systems",
    description: "Sustainable energy solutions with professional installation and monitoring systems.",
  },
]

const softwareServices = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
  },
  {
    icon: Code,
    title: "Full-Stack Systems",
    description: "Complete software solutions from frontend interfaces to backend infrastructure.",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Scalable database design, implementation, and optimization for your business needs.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive technology solutions covering both hardware installations and software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hardware Services */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Hardware Solutions</h3>
            <div className="space-y-6">
              {hardwareServices.map((service, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Software Services */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Software Solutions</h3>
            <div className="space-y-6">
              {softwareServices.map((service, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-accent" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
