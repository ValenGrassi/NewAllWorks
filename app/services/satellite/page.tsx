import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Satellite, Radio, Signal, Globe, CheckCircle, Phone, MapPin } from "lucide-react"

export default function SatelliteAntennasPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Satellite className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Satellite Antenna Installation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Connect to the world with professional satellite communication systems. From internet connectivity to
              broadcast reception, we provide reliable satellite solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Signal className="w-5 h-5 mr-2" />
                Check Coverage
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                <Phone className="w-5 h-5 mr-2" />
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Satellite Communication Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional satellite antenna systems for reliable connectivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Satellite Internet</CardTitle>
                <CardDescription>High-speed internet access for remote locations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">High-speed connectivity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Weather-resistant equipment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">24/7 connectivity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Radio className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Broadcast Reception</CardTitle>
                <CardDescription>TV and radio broadcast antenna systems</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">HD/4K signal quality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Multi-satellite reception</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Commercial distribution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Signal className="w-12 h-12 text-primary mb-4" />
                <CardTitle>VSAT Systems</CardTitle>
                <CardDescription>Very Small Aperture Terminal for enterprise communications</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Private network connectivity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Redundant connections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Global coverage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Satellite Applications</h2>
            <p className="text-lg text-muted-foreground">Versatile solutions for various industries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Remote Locations</h3>
              <p className="text-muted-foreground text-sm">
                Internet access where terrestrial connections aren't available
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Corporate Offices</h3>
              <p className="text-muted-foreground text-sm">Backup connectivity and redundant internet access</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">🏭</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Industrial Sites</h3>
              <p className="text-muted-foreground text-sm">Reliable communication for manufacturing and operations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">📡</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Broadcasting</h3>
              <p className="text-muted-foreground text-sm">TV and radio signal distribution systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Technical Capabilities</h2>
            <p className="text-lg text-muted-foreground">Professional-grade satellite communication equipment</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Antenna Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Dish Sizes</span>
                    <span className="font-semibold">0.6m - 4.5m</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Frequency Bands</span>
                    <span className="font-semibold">C, Ku, Ka Band</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Polarization</span>
                    <span className="font-semibold">Linear & Circular</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Tracking</span>
                    <span className="font-semibold">Fixed & Auto-tracking</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Data Rates</span>
                    <span className="font-semibold">Up to 1 Gbps</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Availability</span>
                    <span className="font-semibold">99.5% uptime</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Latency</span>
                    <span className="font-semibold">600ms typical</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Coverage</span>
                    <span className="font-semibold">Global</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Installation Process</h2>
            <p className="text-lg text-muted-foreground">Professional satellite antenna installation in 5 steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Site Survey",
                description: "Assess location, line-of-sight, and mounting requirements",
              },
              {
                step: "02",
                title: "System Design",
                description: "Configure optimal satellite system for your needs",
              },
              {
                step: "03",
                title: "Equipment Setup",
                description: "Install antenna, mount, and associated equipment",
              },
              {
                step: "04",
                title: "Signal Alignment",
                description: "Precise satellite pointing and signal optimization",
              },
              {
                step: "05",
                title: "Testing & Training",
                description: "System testing and user training",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Our Satellite Services?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Certified Installers</h3>
                    <p className="text-muted-foreground text-sm">Licensed technicians with satellite expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Premium Equipment</h3>
                    <p className="text-muted-foreground text-sm">Professional-grade antennas and components</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Weather Protection</h3>
                    <p className="text-muted-foreground text-sm">All-weather installation and equipment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">
                    ✓
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">Ongoing Support</h3>
                    <p className="text-muted-foreground text-sm">Maintenance and technical support services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg p-8 border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Satellite Coverage Check</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Business Location</label>
                  <input
                    type="text"
                    placeholder="Enter address or coordinates"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Service Type</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background">
                    <option>Satellite Internet</option>
                    <option>Broadcast Reception</option>
                    <option>VSAT Communication</option>
                    <option>Backup Connectivity</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Bandwidth Requirements</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background">
                    <option>Up to 25 Mbps</option>
                    <option>25-100 Mbps</option>
                    <option>100-500 Mbps</option>
                    <option>500+ Mbps</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Special Requirements</label>
                  <textarea
                    className="w-full px-3 py-2 border border-border rounded-md bg-background"
                    rows={3}
                    placeholder="Describe any specific needs..."
                  ></textarea>
                </div>
                <Button className="w-full">
                  <Signal className="w-4 h-4 mr-2" />
                  Check Coverage
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
